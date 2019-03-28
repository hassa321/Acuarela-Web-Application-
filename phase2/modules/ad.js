const mongoose = require('mongoose')

const Advertisment = mongoose.model('Advertisment', {
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
    id: moongoose.Schema.Types.objectId,
    
    type:{
        type: String,
        required: true,
    }
})

module.exports = { Advertisment }