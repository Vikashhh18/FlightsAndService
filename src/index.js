const express=require('express');
const {PORT}=require('./config/serverConfig');
const app=express();
const serverStart=async()=>{
    app.listen(PORT,()=>{
        console.log("server will start at ",PORT);
    })
}
serverStart();