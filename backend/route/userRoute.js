const express = require("express")
const {register, getUsers, deleteAll, login, getUser} = require("../controller/userController")

const userrouter = express.Router()

userrouter
.get("/getuser", getUsers)
.get("/user/:id", getUser)
.post("/register", register)
.post("/login", login)
.delete("/deletealluser", deleteAll)

module.exports = userrouter