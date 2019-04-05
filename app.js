'use strict';
const express = require('express')
const port = process.env.PORT || 3000
const bodyParser = require('body-parser') // middleware for parsing HTTP body
const { ObjectID } = require('mongodb')
const cors  = require('cors')
var http=require('http');



const { mongoose } = require('./db/mongoose')

// import the models
const { Ad } = require('./models/ad')
const { User } = require('./models/user')

const app = express();
var server = http.Server(app)
app.use(express.static(__dirname + '/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }))
//
app.use(cors())



app.get('/', (req, res) => {
	res.sendFile(__dirname + '/views/index.html')
	
})

app.get('/signin', (req, res) => {
	
	console.log('sadasd')
	res.sendFile(__dirname + '/views/signin.html')

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
        location: req.body.location 
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
		res.send( advert );
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
////// --end of routes for ads ----/// 
////// start route for users ----////
/** User routes **/


//
// User login and logout routes

app.post('/users/signin', (req, res) => {
	const username = req.body.username
	console.log(`username${username}`)
	
	const password = req.body.password
	console.log(`password${password}`)
	
	User.findByEmailPassword(username, password).then((user) => {
		if(!user) {

			res.redirect('/signin')
		} else {
			// Add the user to the session cookie that we will
			// send to the client
			req.session.user = user._id;
			req.session.email = user.email
			res.redirect('/')
		}
	}).catch((error) => {
		console.log('abs')
		res.status(400).redirect('/signin')
	})
})

app.get('/users/logout', (req, res) => {
	req.session.destroy((error) => {
		if (error) {
			res.status(500).send(error)
		} else {
			res.redirect('/')
		}
	})
})


// Middleware for authentication for resources
const authenticate = (req, res, next) => {
	if (req.session.user) {
		User.findById(req.session.user).then((user) => {
			if (!user) {
				return Promise.reject()
			} else {
				req.user = user
				next()
			}
		}).catch((error) => {
			res.redirect('/login')
		})
	} else {
		res.redirect('/login')
	}
}








// add New User
app.post('/users', (req, res) => {

	// Create a new user
	const user = new User({
		username: req.body.username,
		password: req.body.password
	})

	// save user to database
	user.save().then((result) => {
		res.send(user)
	}, (error) => {
		res.status(400).send(error) // 400 for bad request
	})

})
// delete user
app.delete('/users/:id',(req,res)=>{
// Add code here

	// get paramters from body of request
	const id = req.params.id;
			
	if (!ObjectID.isValid(id)) {
		return res.status(404).send();
	} 
	User.findOneAndDelete({_id: req.params.id}, req.body, function(err,data)
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