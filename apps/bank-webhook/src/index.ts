import express from "express";
import db from "@repo/prisma/nodeclient";
import cors from "cors";
const App = express();
const port: number = 3004;
let retryCout = 0;
let MAX_RETRIES = 10;

App.get("/", (req, res) => {
  res.status(200).json({
    msg: "Healthy Deposite Server",
  });
});


App.use(
  async function  connectDatabase(req,res,next){
    try{
      db.$connect()
      next();
    }
    catch(e){
      console.log(e)
    }
  
  }
)

App.use(express.json());
App.use(cors());


App.post("/hdfcWebhook", async (req, res) => {
    const { token, user_indentifier, amount } = req.body;

  const paymentInformation = {
    token: String(token),
    userId: parseInt(user_indentifier, 10),
    amount: parseFloat(amount),
  };

  console.log(req.body.token);
  if(paymentInformation){
    res.json({
      message:"success",
    })
  }
  else{
    res.json({
      message:"fail"
    })
  }

});

App.post("/withdrawWebhook", async (req, res) => {
    const { token, user_indentifier, amount } = req.body;

    // Validate and convert types
    const paymentInformation = {
        token: String(token),
        userId: parseInt(user_indentifier, 10),
        amount: parseFloat(amount),
    };

    console.log("Received webhook payload:", paymentInformation);
  if(paymentInformation){
    res.json({
      message:"success",
    })
  }
  else{
    res.json({
      message:"fail"
    })
  }
    // Check for required fields
   

    // try {
    //     await db.$transaction([
    //         db.balance.update({
    //             where: { userId: paymentInformation.userId },
    //             data: {
    //                 amount: {
    //                     decrement: paymentInformation.amount,
    //                 },
    //             },
    //         }),
    //         db.onRampTransaction.update({
    //             where: { token: paymentInformation.token },
    //             data: { status: "Success" },
    //         }),
    //     ]);

    //     res.status(200).json({ msg: "success" });
    // } catch (e) {
    //     console.error("Transaction failed:", e);
    //     res.status(400).json({ msg: "Fail" });
    // }
});


async function startServer() {
  try {
    await db.$connect();
    App.listen(port, "0.0.0.0", () => {
      console.log(`Banking sever listing on  ${port}`);
    });
  } catch (e) {
    console.log("database went wrog", e);
    retryCout ++;
    if(retryCout < MAX_RETRIES){
        setTimeout(startServer, 3000);
    }else{
        console.error('Max Tries Reach');
        process.exit(1);
    }

  }
}
startServer() 