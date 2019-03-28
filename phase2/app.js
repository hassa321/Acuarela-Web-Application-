'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

app.use(express.static(__dirname + '/pub'));


app.get('/', (req, res) => {
})

app.get('/signin', (req, res) => {
})  
app.get('/register', (req, res) => {
})

app.get('/admin', (req, res) => {
})

app.get('/profile', (req, res) => {
})

app.get('/newpost', (req, res) => {
})

app.get('/ad/:id', (req, res) => {
    res.send(req.params.id);
})








const port = process.env.PORT || 3000
app.listen(port, () => {
	console.log(`Listening on port ${port}...`)
}) 