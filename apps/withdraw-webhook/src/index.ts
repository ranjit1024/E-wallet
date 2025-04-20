import express from "express";
import cors from "cors";
const port : number = 5004;

const App = express();
App.use(express.json());

App.use(cors());

App.get("/", (req,res)=>{
    console.log("Healthy Server");
    res.status(200).json({
        msg:'Helthy Server'
    })
})
App.listen(port, () =>{
    console.log(`listing on a ${port}`);
})