const express = require("express")
const router = express.Router()

router.route("/")
    .get((request, response) => {
        response.send("GET - Get a random book")
    })
    .post((request, response) => {
        response.send("SEND - Add a book")
    })
    .put((request, response) => {
        response.send("PUT - Update a book")
    })

module.exports = router