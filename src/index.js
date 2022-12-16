const express = require("express");
const { PORT } = require("./config/serverConfig")
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");
const db  = require('./models/index');
const APIRoutes = require('./routes/index');

const setupAndStartServer = async ()=> {

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}))

    app.use('/api', APIRoutes);

    app.listen(PORT, ()=>{
        console.log(`server started at ${PORT}`);
        
    })
}

setupAndStartServer();