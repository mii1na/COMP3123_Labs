const express = require("express")
const fs = require("fs")
var dateFormat = require("dateformat")

var books = require("./Books")
var computers = require("./Computers")

const app = express()
const router = express.Router()

let writeData = (data) => {
  data += "\n"
  fs.appendFile("server_log.txt", data, function (error) {
    if (error) {
      throw error
    }
    console.log("Log Saved!!")
  })
}

// MiddleWare function
let logger = (req, res, next) => {
  const todays = dateFormat(Date(), "dddd, mmmm dS, yyyy, h:MM:ss TT")
  let data = `[${todays}] - ${req.originalUrl}`
  writeData(data)
  next()
}

app.use(logger)

let booksLogger = (req, res, next) => {
  console.log("Books logger was called")
  next()
}

app.use(booksLogger)
app.use("/books", books)
app.use("/books/computers", computers)

app.listen(process.env.port || 8081)
console.log(
  "Web server is listening at this port: " + (process.env.port || 8081),
)
