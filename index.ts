require('dotenv').config()
import  express from "express";
import {connectToDatabase} from "./src/loaders"
import {productRouter} from "./src/routers/index";
import dotenv from "dotenv";

const app = express();
const port = 3000;

connectToDatabase()
.then(()=>{
    app.use("/api",productRouter);
    app.listen(port,()=>{
        console.log(`server is running on the port ${port}`);
    })
})
.catch((error:Error)=>{
    console.log(`couldn't connected to database something error; ${error}`);
})

dotenv.config()
console.log(process.env.DB_CONN_STRING)


