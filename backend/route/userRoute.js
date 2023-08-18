const express = require("express")
const {register, getUsers, deleteAll, login, getUser, verifyToken} = require("../controller/userController")

const userrouter = express.Router()

userrouter
.get("/User/getuser", getUsers)
.get("/User/user/:id", getUser)
.get("/User/verify", verifyToken)
.post("/User/register", register)
.post("/User/login", login)
.delete("/User/deletealluser", deleteAll)

module.exports = userrouter