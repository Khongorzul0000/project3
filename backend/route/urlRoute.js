const express = require("express")
const {createUrl, getUrls, shortUrl, deleteUrl} = require("../controller/urlController")

const urlrouter = express.Router()

urlrouter
.get("/urls", getUrls)
.get("/:shortUrl", shortUrl)
.post("/create", createUrl)
.delete("/delete/:id", deleteUrl)

module.exports = urlrouter