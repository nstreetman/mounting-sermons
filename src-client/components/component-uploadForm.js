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
<form class="M-form-group M-grid">
<div class="form-field M-sm-12-of-12 M-md-6-of-12">
    <label>Clergy</label>
    <select>
      <option value="Warner">'The Rev. Chris Warner'</option>
      <option value="Norris">'The Rev. Sean Norris'</option>
      <option value="Spencer">'The Rev. Trevor Spencer'</option>
      <option value="Bennett">'The Rev. Jonathan Bennett'</option>
  </select>
</div>

   <div class="form-field M-sm-12-of-12 M-md-6-of-12">
       <label>Series</label>
       <select>
         <option value="GenHearts">'Generous Hearts'</option>
         <option value="LifeTogether">'Life Together'</option>
         <option value="Formed">'Formed'</option>
         <option value="CrazyBusy">'Crazy Busy'</option>
     </select>
   </div>

</form>
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
