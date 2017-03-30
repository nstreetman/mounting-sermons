import ReactDOM from 'react-dom'
import React from 'react'
import Backbone from 'backbone'
import {STORE} from './store.js'
import { SermonCollection } from './models/model-sermon.js'
import { AdminModel } from './models/model-admin.js'
import configureYouTubeUploader from "./services/youtube-uploader.js"

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
      ACTIONS.changeCurrentNav('UPLOAD', 'upload')
    })
  },

  uploadToFileStack: function (fileInfoObj){
    let client = filestack.init('AoR65q9vnRxqb5UWVJEGBz')
    client.upload(theFile).then(function(fileStackRes){
      console.log(fileStackRes)
      toastr.success('Sermon Submitted!')
      let formEl = uploadform
      let sermonModel = new SermonModel()
        sermonModel.set({
        // let formData = {
            pastor: fileInfoObj.pastor,
            series: fileInfoObj.series,
            campus: fileInfoObj.campus,
            date: fileInfoObj.date,
            ytVideoId: 'kVmJUtORsuM',
            filestackUrl: fileStackRes.url
        })
      sermonModel.save().then(function(serverRes){
        console.log (serverRes)

      })
    })

  },

  uploadToYoutube: function (fileInfoObj, token){
    let youTubeConfig =   {
       desc: `Delivered ${fileInfoObj.date}`,
       title: `${fileInfoObj.pastor} - ${fileInfoObj.campus} `,
       file: fileInfoObj,
       ytToken: token
     }

    let youtubeUploader = configureYouTubeUploader(youTubeConfig)
    youtubeUploader.upload()

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
