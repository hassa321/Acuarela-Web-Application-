/* Users model */
const mongoose = require('mongoose');
// const validator = require('validator')
// const bcrypt = require('bcryptjs')
mongoose.connect('mongodb://localhost/acuarela');
var db = mongoose.connection;

// We'll make this model in a different way
var UserSchema = new mongoose.Schema({
	name: {
		type: String,
		index: true
	},
	username: {
		type: String,
		trim: true, // trim whitespace
		unique: true
	},
	password: {
		type: String,
		minlength: 3
	},
	gender: {
		type: String
	},
	phone: {
		type: String
	},
	email: {
		type: String
	},
	campus: {
		type: String
	},
	status: {
		type: Number
	}
});



// // Our own user finding function
// UserSchema.statics.findByEmailPassword = function(username, password) {
// 	const User = this
//
// 	return User.findOne({username: username}).then((user) => {
// 		console.log("gets to models")
// 		if (!user) {
// 			console.log("error here")
// 			console.log(Promise.reject())
// 			return Promise.reject()
// 		}
//
// 		return new Promise((resolve, reject) => {
// 			bcrypt.compare(password, user.password, (error, result) => {
// 				if (result) {
// 					log('HEREHEHRE')
// 					resolve(user);
// 				} else {
// 					reject();
// 				}
// 			})
// 		})
// 	})
// }
//
// // This function runs before saving user to database
// UserSchema.pre('save', function(next) {
// 	const user = this
//
// 	if (user.isModified('password')) {
// 		bcrypt.genSalt(10, (error, salt) => {
// 			bcrypt.hash(user.password, salt, (error, hash) => {
// 				user.password = hash
// 				next()
// 			})
// 		})
// 	} else {
// 		next();
// 	}
//
// })
var User = module.exports = mongoose.model('User', UserSchema);
module.exports.createUser = function(newUser, callback){
	newUser.save(callback);
}

// const User = mongoose.model('User', UserSchema)
//
// module.exports = { User }
