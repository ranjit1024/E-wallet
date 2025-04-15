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
        userid:req.body.user_indentifier,
        amount:req.body.amount  
    }
 
})

App.listen(3001, ()=>{
    console.log('listing on port 3000')
})