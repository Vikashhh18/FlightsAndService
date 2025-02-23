const express=require('express');
const bodyParser=require('body-parser');
const {PORT}=require('./config/serverConfig');
const app=express();
const serverStart=async()=>{
    app.use(bodyParser.json);
    app.use(bodyParser.urlencoded({extended:true}));
    app.listen(PORT,()=>{
        console.log("server will start at ",PORT);
    })
}
serverStart();