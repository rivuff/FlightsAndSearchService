const express = require("express");
const { PORT } = require("./config/serverConfig")
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");


const setupAndStartServer = async ()=> {

    const app = express();
    app.use(bodyParser)
    app.use(bodyParser.urlencoded({extended:true}))

    app.listen(PORT, ()=>{
        console.log(`server started at ${PORT}`);
    })
}

setupAndStartServer();