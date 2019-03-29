'use strict';
const express = require('express')
const port = process.env.PORT || 3000
const bodyParser = require('body-parser') // middleware for parsing HTTP body
const { ObjectID } = require('mongodb')

const { mongoose } = require('./db/mongoose')

// import the models
const { Ad } = require('./models/Ad')
app.use(express.static(__dirname + '/pub'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }))
``


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
	// get ad by ad_Id
	const id = req.params.id
	// check if ID is valid ID
	if (!ObjectID.isValid(id)){
		res.status(404).send()
	}
	// find student 
	Ad.findbyID(id).then((student)=>{
		// if student doesnt exist then send 404
		if(!student){
			res.status(404).send()
		}else{
			// send student  back
			res.send(student)
		}
	}).catch((error)=>{
		res.status(500).send()
	})

})

app.post('/ad/newad',(req, res)=> {
	// add new ad to database

	// Create a new Advertisment
	const ad = new Ad({
		title: req.body.title,
		price: req.body.price
		type: req.body.type

	})

	// Save advertisement to the database
	student.save().then((result) => {
		res.send(result)
	}, (error) => {
		res.status(400).send(error) // 400 for bad request
	})

})








const port = process.env.PORT || 3000
app.listen(port, () => {
	console.log(`Listening on port ${port}...`)
}) 