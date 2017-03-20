import ReactDOM from 'react-dom'
import React from 'react'
import Backbone from 'backbone'
import {STORE} from './store.js'

export const ACTIONS = {
  setView: function(viewName){
    STORE.setStore('currentView', viewName)
  },
   saveNewSermon: function(userFormEntry){
      let newSermonInstance = new SermonModel()
      newSermonInstance.set(userFormEntry)
      newSermonInstance.save().then(function(serverRes){
        ACTIONS.fetchAllSermons()
      })
   },

   fetchAllSermons: function(){
      let sermonCollInstance = new SermonCollection()
      return SermonCollInstance.fetch()
},

  routeTo: function(path){
		window.location.hash = path
	}
}
