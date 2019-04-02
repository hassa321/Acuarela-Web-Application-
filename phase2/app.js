'use strict';
const express = require('express')
const port = process.env.PORT || 3000
const bodyParser = require('body-parser') // middleware for parsing HTTP body
const { ObjectID } = require('mongodb')

const { mongoose } = require('./mongoose')

// import the models
const { Ad } = require('./models/ad')
const app = express();
app.use(express.static(__dirname + '/pub'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }))



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

app.post('/ads',(req, res)=> {
	// add new ad to database

	/* 
	Request body expects:
	{
	"title": <Ad>
	"description": <Advertisement description>
    "type": <Ad Type>
    "class_code": <Class code add belongs to>
	}
	*/
	// Create a new Advertisment
	const Advert = new Ad({
		title: req.body.title,
		price: req.body.price,
		type: req.body.type,
        class_code: req.body.class_code 
	})

	// Save advertisement to the database
	Advert.save().then((result) => {
		res.send(result)
	}, (error) => {
		res.status(400).send(error) // 400 for bad request
	})

})


app.get('/ads', (req, res) => {
	// Add code here
	Ad.find().then((advert) => {
		res.send(  advert );
	}, (error) => {
		res.status(400).send(error);
	});
});




app.get('/ads/:id', (req, res) => {
	// get ad by ad_Id
	const objId = req.params.id
	// check if ID is valid ID
	if (!ObjectID.isValid(objId)){
		res.status(404).send()
	}
	// find advertisement 
	Ad.findById(objId).then((advert) => {
		// if Ad doesnt exist then send 404
		if(!advert){
			res.status(404).send()
		}else{
			// send Ad  back
			res.send(advert)
		}
	}).catch((error)=>{
		res.status(400).send(error)
	})

})


app.delete('/ads/:id',(req,res)=>{
// Add code here

	// get paramters from body of request
	const id = req.params.id;
			
	if (!ObjectID.isValid(id)) {
		return res.status(404).send();
	} 
	Ad.findOneAndDelete({_id: req.params.id}, req.body, function(err,data)
	{
    if(!err){
        console.log("Deleted");
        res.send(data)
    }
	})
})

	






app.listen(port, () => {
	console.log(`Listening on port ${port}...`)
}) 