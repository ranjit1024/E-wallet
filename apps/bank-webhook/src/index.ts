import express from "express";

const App = express();

App.get("/", (req,res)=>{
    res.status(200).json({
        msg:'Healthy Server'
    })
});


App.listen(3000, ()=>{
    console.log('listing on port 3000')
})