'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

app.use(express.static(__dirname + '/pub'));


app.get('/', (req, res) => {
    res.render('index.html');
})

app.get('/signin', (req, res) => {
    res.render('signin.html');
})  

app.get('/register', (req, res) => {
    res.render('register.html');
})

app.get('/admin', (req, res) => {
    res.render('admin.html');
})

app.get('/profile', (req, res) => {
    res.render('profile.html');
})

app.get('/newpost', (req, res) => {
    res.render('post.html');
})

app.post('/post', (req, res) => {

})

app.post('/register', (req, res) => {
    
})

app.post('/register', (req, res) => {
    
})


const port = process.env.PORT || 3000
app.listen(port, () => {
	log('Listening on port 3000...')
}) 