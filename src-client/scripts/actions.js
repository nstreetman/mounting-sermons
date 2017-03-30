import ReactDOM from 'react-dom'
import React from 'react'
import Backbone from 'backbone'
import {STORE} from './store.js'
import { SermonCollection, SermonModel } from './models/model-sermon.js'
import { AdminModel } from './models/model-admin.js'
import configureYouTubeUploader from "./services/youtube-uploader.js"
import toastr from 'toastr'
import moment from 'moment'

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
      ACTIONS.routeTo('upload')
    })
  },



  uploadToYoutube: function(fileInfoObj, token){
    console.log('Uploading to youtube.....');

    let _handleUploadSuccess = function(youtubeVidDataRaw){
      toastr.success("Youtube Upload Succeeded")
      console.log(youtubeVidData)
      let youtubeVidData = JSON.parse(youtubeVidDataRaw)
      ACTIONS.uploadToFileStack(fileInfoObj, youtubeVidData.id)
    }

    let _handleUploadFail = function(){
      toastr.error("Youtube Upload Failed")
    }

    let youTubeConfig = {
       vidDesc: `Delivered ${fileInfoObj.date}`,
       vidTitle: `${fileInfoObj.pastor} - ${fileInfoObj.campus} `,
       vidFile: fileInfoObj.file,
       ytToken: token
     }

    let youtubeUploader = configureYouTubeUploader(youTubeConfig, _handleUploadSuccess, _handleUploadFail )
    toastr.info('Uploading video to youtube')
    youtubeUploader.upload()

  },



  uploadToFileStack: function (fileInfoObj, ytVideoIdArg){
    toastr.info('Uploading file to filestack')

    let client = filestack.init('AoR65q9vnRxqb5UWVJEGBz')
    client.upload(fileInfoObj.file).then(function(fileStackRes){
      toastr.success('Sermon Submitted to Filestack!')
      let objToSave = {
        pastor:  fileInfoObj.pastor,
        series:  fileInfoObj.series,
        campus: fileInfoObj.campus,
        date:  moment(fileInfoObj.date),
        ytVideoId: ytVideoIdArg,
        filestackUrl : fileStackRes.url
      }
      ACTIONS.saveToBackend(objToSave)
    })
  },

  saveToBackend: function(dataObj){
    toastr.success('Saving sermon to database')

    let sermonModel = new SermonModel()
    sermonModel.set(dataObj)
    sermonModel.save().then(function(serverRes){
      console.log(serverRes)
      ACTIONS.routeTo('')
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


  routeTo: function(path){
		window.location.hash = path
	}
}
