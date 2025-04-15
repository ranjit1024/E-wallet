import express from "express"
import db from "@repo/prisma/clinet";
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


    try{

        await db.$transaction([
             db.balance.update({
                where:{
                    userId:paymentInformation.userId
                },
                data:{
                    amount:{
                        increment:paymentInformation.amount
                    }
                }
            }),
        
             db.onRampTransaction.update({
                where:{
                    token:paymentInformation.token
                },
                data:{
                    status:"Succes"
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

App.listen(3001, ()=>{
    console.log('listing on port 3000')
})