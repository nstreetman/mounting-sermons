import Backbone from 'backbone';
import {ShoutModel, ShoutCollection} from './models/model-shout.js'

export const ACTIONS = {
	saveNewShout: function(userFormEntry){
		let newShoutInstance = new ShoutModel()
		newShoutInstance.set(userFormEntry)
		newShoutInstance.save().then(function(serverRes){
			console.log(serverRes)
		})
	},
	
	fetchAllShouts: function(){
		let shoutsCollInstance = new ShoutCollection()
		return shoutsCollInstance.fetch()
	}
	

}

