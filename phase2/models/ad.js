const mongoose = require('mongoose')

const Ad = mongoose.model('Ad', {
	title: {
		type: String,
		required: true,
		minlegth: 4
	},
	price: {
		type: Number,
		required: true,
        min: 1,
        max: 1000, 

    },
    
    type:{
        type: String,
        required: true,
	},
	
	class_code:{
		type: String,
		minlength: 6,
		maxlength: 6
	}
})

module.exports = { Ad }