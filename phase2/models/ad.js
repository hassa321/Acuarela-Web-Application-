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
	
})

module.exports = { Ad }