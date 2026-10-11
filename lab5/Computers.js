const express = require("express")
const router = express.Router()

router.route("/game-dev")
    .get((request, response) => {
        response.send("GET - /books/computers/game-dev")
    })
    .post((request, response) => {
        response.send("POST - /books/computers/game-dev")
    })

router.route("/java")
    .get((request, response) => {
        response.send("GET - /books/computers/java")
    })

router.route("/python")
    .get((request, response) => {
        response.send("GET - /books/computers/python")
    })

module.exports = router