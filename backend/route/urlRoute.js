const express = require("express")
const {createUrl, getUrls, deleteUrl, getUrl} = require("../controller/urlController")

const urlrouter = express.Router()

urlrouter
.get("/Url/urls", getUrls)
.get("/Url/url/:id", getUrl)
.post("/Url/create", createUrl)
.delete("/Url/delete/:id", deleteUrl)

module.exports = urlrouter