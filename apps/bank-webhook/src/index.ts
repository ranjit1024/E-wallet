import express from "express"
import db from "@repo/prisma/nodeclient";
import cors from "cors"
const App = express();
const  port : number  = 3004;
App.get("/", (req,res)=>{
    res.status(200).json({
        msg:'Healthy Server'
    })
});
App.use(express.json())
App.use(cors());

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

App.listen(port, ()=>{
    console.log(`deposite sever listing on  ${port}`)
})