const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const {User} = require('../db/models/userModel.js')

function handleLoginForUser(inputUser, inputPW, doneCb){
	return function(err, results){
		  console.log(inputPW)
        if(err || !results){  
          //will trigger failure callback
          doneCb(null , false, {message: "no user exists with that email"})   
        } 
        let user = new User(results)
	     user.checkPasswordToHash(inputPW).then(function(bCryptResults){
	 	    console.log('success!!', bCryptResults)
          // calls req.login(results) -- triggers success callback
          doneCb(null, true ,bCryptResults); 
	 	  }).catch(function(err){
          //will trigger failure callback
	 		 doneCb(null, false, { message: "bad password"} )      
	 	  })
    }
}

module.exports = function(){
  let authFields = {
      usernameField: 'email',
      passwordField: 'password'
  }

  let onLogin = function(inputUser, inputPW, done){
		console.log(inputPW);
      User.findOne({"email": inputUser}, handleLoginForUser(inputUser, inputPW, done) )
  }

  passport.serializeUser((user, done)=>{
    done(null, user.id);
  })

  passport.deserializeUser( (userId, done)=>{
    User.findById(userId, "-password", (err, record) => {
      done(null, record)
    })
  })


  passport.use( new LocalStrategy(authFields, onLogin) ) 
}
