"use server";
import db from "@repo/prisma/clinet";
import { getServerSession } from "next-auth";

import { authOptions } from "../auth";

type transferType = "deposite" | "receive" | "send" | "withdraw";
type status =  "Success" |
"Pending"|
"failed"

interface monthData{
  month: string | null;
  total_counnt: number | null;
}

interface OnRampTransaction {
  id: number;
  status:status
  token: string;
  provider: string;
  amount: number;
  startTime: Date;
  userId: number;
  transfer: transferType
}

export async function getUserData({ type }: { type: transferType }) {
  let userData = 0;
  const session  = await getServerSession(authOptions);
  const id : number = Number(session?.user?.id);

  const data = await db.onRampTransaction.findMany({
    where: {
      userId: id,
    },
  });

  console.log("test");
  data.forEach((item:OnRampTransaction) => {
    if (item.status === "Success" && item.transfer === type) {
      return (userData += item.amount);
    }
  });
  console.log("call")
  return userData;
}

export async function monthlyTransactionCount() {
  const session = await getServerSession(authOptions);
  const id = Number(session?.user?.id);

  const monthlyTransactionCount: [] = await db.$queryRaw`
  SELECT 
  TO_CHAR(DATE_TRUNC('month', "startTime"),'FMDD FMMonth YYYY') AS month, count(id) AS total_counnt
FROM "OnRampTransaction"
WHERE "userId" = ${id}
GROUP BY month
ORDER BY month
`;

  let monthData: {
    month: string | null;
    total_counnt: number | null;
  } = { month: null, total_counnt: 0 };

  monthlyTransactionCount.forEach((data:monthData) => {
    monthData = data;
  });
  console.log("call")
  console.log(monthData)
  return monthData;
}
