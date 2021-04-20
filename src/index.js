const express = require("express")
const cors = require("cors")

const fibo = require("./fibo")
const quadratic = require("./quadratic")

const server = express()

server.use(cors())
server.use(express.json())

server.get("/fibo/:number", function (req, res) {
    try {
        const number = parseInt(req.params.number)

        if (isNaN(number)) {
            return res
                .status(400)
                .send({
                    message: `el valor '${req.params.number}' no es un número`
                })
        }

        else if (number <= 0) {
            return res
                .status(400)
                .send({
                    message: "la longitud no puede ser cero o negativa"
                })
        }

        else {
            const list = fibo.makeFibonacciArray(number)
            const text = list.join(" ")

            return res.send(text)
        }
    }

    catch (err) {
        return res
            .status(500)
            .send({
                message: "oops, algo fallo seriamente",
                error: err.message
            })
    }
})

server.get("/quadratic", function (req, res) {
    const { a, b, c } = req.query

    if (a && b && c) {
        const [x1, x2] = quadratic(a, b, c)

        return res.send({
            x1: x1,
            x2: x2,
        })
    }

    else {
        return res.send({
            message: "alguno de los campos necesarios no fue enviado"
        })
    }
})

server.listen(process.env.PORT || 5000, function () {
    console.log("Rocket is launch 🤘")
})