import express from "express"
import db from "@repo/prisma/nodeclient";
import cors from "cors"

const App = express();
const port : number = 3005;
let MAX_RETRIES  = 10;
let retryCout = 0;
App.get("/", (req,res)=>{
    res.status(200).json({
        msg:'Healthy Server'
    })
});
App.use(express.json())
App.use(cors());

App.post("/depositewebhook", async (req,res)=>{
  
    const paymentInformation = {
        token:req.body.token,
        userId:req.body.user_indentifier,
        amount:req.body.amount  
    }

    console.log(req.body.token)
    try{
      
        await db.$transaction([

                     
             db.balance.update({
                where:{
                    userId:paymentInformation.userId
                },
                data:{
                    amount:{
                        decrement:paymentInformation.amount
                    }
                }
            }),
        
             db.onRampTransaction.update({
                where:{
                    token:paymentInformation.token
                },
                data:{
                    status:"Success"
                }
            })
    ])
    
   

    res.status(200).json({
        msg:"success"
    })
}
catch(e){
    console.log(e)
    res.status(400).json({
        msg:"Fail"
    })
}
 
})

async function startServer() {
  try {
    await db.$connect();
    App.listen(port, "0.0.0.0", () => {
      console.log(`deposite sever listing on lkjlkj ${port}`);
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