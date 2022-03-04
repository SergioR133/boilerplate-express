require('dotenv').config()
var express = require('express');
var app = express();


console.log("Hello World")

// app.get('/', (req, res) => {
//     res.send("Hello Express")
// })
app.use("/public", express.static(__dirname + "/public"))

app.use('/', (req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`)
    next()
  })

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/json', (req, res) => {
    if(process.env.MESSAGE_STYLE === 'uppercase'){
        res.json({
            message: "HELLO JSON"
        })
    }
    res.json({
        message: "Hello json"
    })
})

app.get('/now', (req, res, next) => {
    req.time = new Date().toString()
    next()
}, function(req, res) {
    res.json({
        time: req.time
    })
})

app.get("/:word/echo", (req, res) => {
    const word = req.params.word;
    res.json({
        echo: word
    })
})




























 module.exports = app;
