const express = require("express")
const {createUrl, getUrls, shortUrl, deleteUrl} = require("../controller/urlController")

const urlrouter = express.Router()

urlrouter
.get("/Url/urls", getUrls)
.get("/Url/:shortUrl", shortUrl)
.post("/Url/create", createUrl)
.delete("/Url/delete/:id", deleteUrl)

module.exports = urlrouter