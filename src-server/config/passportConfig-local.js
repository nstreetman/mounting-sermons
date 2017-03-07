const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const {User} = require('../db/models/userModel.js')

module.exports = function(){
  let authFields = {
      usernameField: 'email',
      passwordField: 'password'
  }

  let onLogin = function(inputUser, inputPW, done){
      User.findOne({"email": inputUser}, function(err, results){
        if(err || !results){  
          //will trigger failure callback
          done(null , false, {message: "no user exists with that email"})   
        } else if(results.password !== inputPW) {
          //will trigger failure callback
          done(null, false, {message: "bad password"} )      
        } else {
          done(null, results); 
          //calls req.login(results)
        }
    })

  }

  passport.serializeUser( function(user, done){
    done(null, user.id);
  })

  passport.deserializeUser( function(userId, done){
    User.findById(userId, "-password", function(err, record){
      done(null, record)
    })
  })


  passport.use( new LocalStrategy(authFields, onLogin) ) 
}
