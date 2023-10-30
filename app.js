const http = require('http');
const express = require('express')
const path = require('path')
const cors = require('cors');
const asyncify = require("express-asyncify").default;
const app = asyncify(express())

app.use(cors({
    origin: "*",
}));

app.use(express.json());

app.use(express.static(path.join(__dirname, '../Front/build')))

const svc = require('./controllers/surveyController');
const ch = require('./controllers/GenerateController');
const re = require('./controllers/TestController');

app.use('/test', svc);
app.use("/chat", ch);
app.use("/result", re);

const port = 3000;
app.listen(port, function() {
    console.log('listening on', port)
})
