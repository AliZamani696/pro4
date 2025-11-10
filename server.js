
const express = require("express");
const path = require("path");
require("app-module-path").addPath(__dirname)

const router = require("routes/MainRoute");

const app = express();
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use('/public', express.static('public'));
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use("/",router);

const {connectDB} = require("./config/config")
connectDB();

const config = require("config/config");
app.listen(config.port,()=>{
        console.log("server is runing");
});
