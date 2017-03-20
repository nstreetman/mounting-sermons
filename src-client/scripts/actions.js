import ReactDOM from 'react-dom'
import React from 'react'
import Backbone from 'backbone'
import {STORE} from './store.js'

export const ACTIONS = {

  setView: function(viewName){
    STORE.setStore('currentView', viewName)
  }
}
// 
//    saveNewSermon: function(uesrFormEntry){
//       let newSermonInstance = new SermonModel()
//       newSermonInstance.set(uesrFormEntry)
//       newSermonInstance.showCampusView().then(function(serverRes){
//       })
//    },
//    fetchAllSermons: function(){
//       let sermonCollInstance = new SermonCollection()
//       return SermonCollInstance.fetch()
// }
