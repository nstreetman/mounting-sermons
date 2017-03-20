import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'Backbone'
import {SermonModel} from '../models/model-sermon.js'
import {SermonCollection} from '../models/model-sermon.js'
import {ACTIONS} from '../actions.js'

export const uploadFormComponent = React.createClass({
  getInitialState: function(){
    return {

    }
  },

_handleSermonSubmit: function(evt){
  evt.preventDefault();
  let formEl = evt.target
  let formData= {
    name: "The Rev. Chris Warner"
    dateOfSermon:
    campus: "Daniel Island"
    series: "Formed In Christ"
  }


)
}

// })({
//   el:'#app-container',
//   events : {
//     'submit #new-sermon' : 'handleSermonSubmit'
//   },
//
//   handleSermonSubmit: function(evt){
//     evt.preventDefault()
//     let formEl = evt.target
//
//   },
//   _templateHtml: function (){
//
//     return`
//       <div className="form-container">
//       <h2 className="form-header">HELLO this is where the form goes!"</h1>
//
//
//       </div>
//
//
//     `
//   }
// })
