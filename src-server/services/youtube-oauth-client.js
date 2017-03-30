const google = require('googleapis')
const OAuth2Client = google.auth.OAuth2;

module.exports =  {
	configYoutubeClient: (oAuthClient) => { 
		return function youtubeClient(req,res, next){ 

			const scopesList = [
			  'https://www.googleapis.com/auth/youtube.upload',
			  'https://www.googleapis.com/auth/youtube'
			]

			const url = oAuthClient.generateAuthUrl({
			   access_type: 'offline',
			   scope : scopesList
			}) 
			
			req.googleAuthUrl = url
			console.log(url)
			next()
		}
	},

	initTokenManager: function(){
		return new OAuthTokenManager()
	}
}


let OAuthTokenManager = function(){
	let tokens = {}

	this.expectUserToken = function(usrId){
		tokens[`token-${usrId}`] = {}
	}

	this.setUserToken = function(usrId, tokenVal){
		tokens[`token-${usrId}`] = tokenVal
	}

	this.getUserToken = function(usrId){
		return tokens[`token-${usrId}`] 
	}

	this.deleteUserToken = function(usrId){
		delete tokens[`token-${usrId}`]
	}
}