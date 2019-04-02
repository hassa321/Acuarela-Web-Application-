const mongoose = require('mongoose');
// Connect to mongodb

mongoose.connect('mongodb://localhost:27017/AdAPI', { useNewUrlParser: true});

mongoose.connection.once('open',()=>{
	console.log('connection has made been made!')
}).on('error',()=> {
	console.log('error!')
})