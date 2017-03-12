const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

// ----------------------
// USERS
// ----------------------
const usersSchema = new Schema({
  // required for authentication: DO NOT TOUCH Or You May Get Punched
  email:     { type: String, required: true },
  password:  { type: String, required: true },
  // x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x
  
   // example of optional fields
  username:  { type: String },
  createdAt: { type: Date, default: Date.now }

})

function hashNewPassword(next){
   let user = this //context is 
	if(!user.isModified('password')){ return next() }
   bcrypt.hash(user.password, 16.5, (err, hash)=>{
      if(err){ return next(err)}
      user.password = hash;
      next()
   })
}

function handlePasswordCompare(inputPW, user){
	console.log(user)
	return function(resolve, reject){
		bcrypt.compare(inputPW, user.password, (err, passwordMatch)=>{
			if(err || !passwordMatch){ return reject(false) }
			return resolve(user)
		})	
	}
}

usersSchema.pre('save', hashNewPassword )

usersSchema.methods.checkPasswordToHash = function(inputPW, callback){
	let userRecord = this
	return new Promise( handlePasswordCompare(inputPW, userRecord) )
}

module.exports = {
  User: mongoose.model('User', usersSchema)
}
