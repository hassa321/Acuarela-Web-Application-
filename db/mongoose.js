const mongoose = require('mongoose')

// connect to our database
const  mongoURI = process.env.MONGODB_URI || 'mongodb+srv://csc309:csc309!@cluster0-agegf.mongodb.net/test?retryWrites=true'

//mongoose.connect('mongodb://localhost:27017/StudentAPI', { useNewUrlParser: true});
mongoose.connect(mongoURI, { useNewUrlParser: true});

module.exports = { mongoose }