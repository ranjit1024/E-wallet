import express from "express"
import db from "@repo/prisma/nodeclient";
import cors from "cors"
import session from "express-session";
const App = express();
const port : number = 3005;
import { getServerSession } from "next-auth";
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

App.listen(port, ()=>{
    console.log(`Withdraw sever listing on ${port}`)
})