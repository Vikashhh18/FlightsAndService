const express=require('express');
const bodyParser=require('body-parser');

const {PORT}=require('./config/serverConfig');
const cityRepositary = require('./repositary/city-repo');


const app=express();
// const serverStart=async()=>{
//     app.use(bodyParser.json());
//     app.use(bodyParser.urlencoded({extended:true}));
//     app.listen(PORT,()=>{
//         console.log("server will start at ",PORT);
//         const newCity=new CityRepository();
//         newCity.createCity({name:"new Delhi"}); 
//     })
// }

const serverStart = async () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    try {
        const newCity = new cityRepositary();
        // await newCity.createCity({ name: "New mumbai" });
        newCity.deleteCity({id:1});
        console.log("City deleted successfully.");
    } catch (error) {
        console.error("Failed to create city:", error);
    }

    app.listen(PORT, () => {
        console.log("Server started on PORT", PORT);
    });
};

serverStart();