import ReactDOM from 'react-dom'
import React from 'react'
import Backbone from 'backbone'
import {STORE} from './store.js'
import { SermonCollection } from './models/model-sermon.js'
import { AdminModel } from './models/model-admin.js'
export const ACTIONS = {
  setView: function(viewName){
    STORE.setStore('currentView', viewName)
},

  fetchAllSermons: function(){
   console.log('fetching collections')
   let newSermonColl = new SermonCollection()
   newSermonColl.fetch().then(function(serverRes){
      STORE.setStore('allSermons', serverRes)

   })
},

loginUser: function(user,pw){
  AdminModel.logIn(user, pw).then(function(serverRes){
    STORE.setStore('currentUser', serverRes )
    ACTIONS.changeCurrentNav('LOGIN', 'login')
  })
},


  //  saveNewSermon: function(userFormEntry){
  //    ACTIONS.uploadToFileStack(userFormEntry.fileUpload)
  //  },


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
  //  },

  //  uploadToFileStack: function(){
  //      var client = filestack.init('AoR65q9vnRxqb5UWVJEGBz', { policy: 'policy', signature: 'signature' });
  //      client.upload(theFile);
   //
  //  },

   uploadToYoutube: function(){

   },

   saveToBackend: function(){

   },

  routeTo: function(path){
		window.location.hash = path
	}
}
