import ReactDOM from 'react-dom'
import React from 'react'
import Backbone from 'backbone'
import {STORE} from './store.js'

export const ACTIONS = {
  setView: function(viewName){
    STORE.setStore('currentView', viewName)
  },

   saveNewSermon: function(userFormEntry){
     // ACTIONS.uploadToFileStack(userFormEntry.fileUpload)



      // let newSermonInstance = new SermonModel()

      // let objectToSave = {
      //   name: userFormEntry.name,
      //   dateOfSermon: new Date(...vals from userFormEntry.date... ),
      //   campus: userFormEntry.campus,
      //   series: userFormEntry.series ,
      //   ytVideoId: ... ,
      //   filestackUrl : ...
      // }

      // newSermonInstance.set(objectToSave)

      // newSermonInstance.save().then(function(serverRes){
      //   ACTIONS.fetchAllSermons()
      // })
   },

   fetchAllSermons: function(){
      let sermonCollInstance = new SermonCollection()
      return SermonCollInstance.fetch()
   },

   uploadToFileStack: function(){

   },

   uploadToYoutube: function(){

   },

   saveToBackend: function(){

   },

  routeTo: function(path){
		window.location.hash = path
	}
}
