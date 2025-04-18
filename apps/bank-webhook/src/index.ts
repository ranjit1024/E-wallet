import express from "express"
import db from "@repo/prisma/nodeclient";
const App = express();

App.get("/", (req,res)=>{
    res.status(200).json({
        msg:'Healthy Server'
    })
});
App.use(express.json())

App.post("/hdfcWebhook", async (req,res)=>{
    
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
                        increment:paymentInformation.amount
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

App.listen(3004, ()=>{
    console.log('listing on port 3000')
})