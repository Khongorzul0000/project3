const express = require ("express");
const cors = require("cors");
const connect = require('./config/db');
require('dotenv').config()
const urlrouter = require("./route/urlRoute")

const app = express();

const port = process.env.PORT || 8000

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(urlrouter)

app.get('/',(_req, res) =>{
    res.send("Hello world");
})

connect();

app.listen(port, () =>{
    console.log("server started on port:", port)
})