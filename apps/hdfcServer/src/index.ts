import express from "express";
const App = express();

App.get('/', async (req,res)=>{
    res.status(200).json({
        msg:"Helthy Server"
    })
})

App.listen(5001,()=>{
    console.log("listing on 5001 port")
})  