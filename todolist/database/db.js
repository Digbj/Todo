const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config();

const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD
const Connection=()=>{
    const url=`mongodb+srv://${username}:${password}@cluster0.bq8bkue.mongodb.net/`
    mongoose.connect(url,{useNewUrlParser:true});
    mongoose.connection.on("connected",()=>{
        console.log("Connected to DataBase")
    })
    mongoose.connection.on("disconnected",()=>{
        console.log("Batabase Got Disconnected");
    })
    mongoose.connection.on("error",()=>{
        console.log("Error while connecting with the database",error.message);
    })

}
module.exports= Connection;