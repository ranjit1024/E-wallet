import express from "express";
import db from "@repo/prisma/clinet"
const App = express();

App.get("/", (req,res)=>{
    res.status(200).json({
        msg:'Healthy Server'
    })
});

App.post("/hdfcWebhook", async (req,res)=>{
    const paymentInformation = {
        token:req.body.token,
        userId:req.body.user_indentifier,
        amount:req.body.amount  
    };
    const findBalance = db.user.findFirst({
        where:{
            id:paymentInformation.userId,
        }
    })



    await db.balance.update({
        where:{
            userId:paymentInformation.userId
        },
        data:{
            amount: findBalance   +  paymentInformation.amount
        }
    })

    await db.onRampTransaction.update({
        where:{
            token:paymentInformation.token
        },
        data:{
            status:"Succes"
        }
    })
 
})

App.listen(3001, ()=>{
    console.log('listing on port 3000')
})