import ReactDOM from 'react-dom'
import React from 'react'
import Backbone from 'backbone'
import {STORE} from './store.js'

export const ACTIONS = {
   setView: function (viewName){
      STORE.setStore('currentView', viewName)
   }
}
