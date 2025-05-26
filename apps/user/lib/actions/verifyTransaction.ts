import lastRamp from "./getOnramp";
import axios from "axios";
import db from "@repo/prisma/clinet";

export async function verifyDeposit() {
  console.log("data");
  const lastPaymentInfo = await lastRamp();

  const response = await axios.post(`http://localhost:3004/hdfcWebhook`, {
    token: lastPaymentInfo?.token,
    amount: lastPaymentInfo?.amount,
    user_indentifier: lastPaymentInfo?.userId,
  });

  if (response.data === "success") {
    try {
      await db.$transaction([
        db.balance.update({
          where: {
            userId: lastPaymentInfo?.userId,
          },
          data: {
            amount: {
              increment: lastPaymentInfo?.amount,
            },
          },
        }),

        db.onRampTransaction.update({
          where: {
            token: lastPaymentInfo?.token,
          },
          data: {
            status: "Success",
          },
        }),
      ]);
    } catch (e) {
      console.log(e);
    }
  }
}

export async function verifyWithDraw(){
     const lastPaymentInfo = await lastRamp();

  const response = await axios.post(`http://localhost:3004/withdrawWebhook`, {
    token: lastPaymentInfo?.token,
    amount: lastPaymentInfo?.amount,
    user_indentifier: lastPaymentInfo?.userId,
  });
  if(response.data === 'success'){

      try {
        await db.$transaction([
            db.balance.update({
                where: { userId: lastPaymentInfo?.userId },
                data: {
                    amount: {
                        decrement: lastPaymentInfo?.amount,
                    },
                },
            }),
            db.onRampTransaction.update({
                where: { token: lastPaymentInfo?.token },
                data: { status: "Success" },
            }),
        ]);

      
    } catch (e) {
        console.error("Transaction failed:", e);
    
    }
  }

}