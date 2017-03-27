import React from 'react';
import ReactDOM from 'react-dom';
import Backbone from 'backbone';
import {SermonModel} from '../models/model-sermon.js';
import {SermonCollection} from '../models/model-sermon.js';
import {ACTIONS} from '../actions.js';


export const UploadFormComponent = React.createClass({

  _handleUploadToFileStack: function(evt){
    evt.preventDefault()
    let fileInputEl = evt.target.fileInput
    let theFile = fileInputEl.files[0]
    let client = filestack.init('AoR65q9vnRxqb5UWVJEGBz')
    console.log('uploading file...')
    client.upload(theFile).then(function(fileStackRes){
      console.log(serverRes.url)
    })
  },

  _handleSermonSubmit: function(evt){
    evt.preventDefault();
    let formEl = evt.target
    let formData = {
      name: "The Rev. Chris Warner",
      dateOfSermon: '12/12/10',
      campus: "Daniel Island",
      series: "Formed In Christ",
      fileUpload: "https://cdn.filestackcontent.com/YVjjnJKnSlWvsg01lnqH"
    }
  },

  render: function(){
    return (

      <form name="uploadform" onSubmit={this._handleUploadToFileStack}>
      <div className="form-field">
          <label>Clergy</label>
          <select>
            <option value="Warner">The Rev. Chris Warner</option>
            <option value="Norris">The Rev. Sean Norris</option>
            <option value="Spencer">The Rev. Trevor Spencer</option>
            <option value="Bennett">The Rev. Jonathan Bennett</option>
            <option value="AddNew">Add New...</option>
        </select>
      </div>

         <div className="form-field">
             <label>Sermon Series</label>
             <select>
               <option value="GenHearts">Generous Hearts</option>
               <option value="LifeTogether">Life Together</option>
               <option value="Formed">Formed</option>
               <option value="CrazyBusy">Crazy Busy</option>
               <option value="AddNew">Add New...</option>
           </select>
         </div>

         <div className="form-field">
             <label>Campus</label>
             <select>
               <option value="SI">Sullivan&#8217;s Island</option>
               <option value="DI">Daniel Island</option>
               <option value="ION">I&#8217;On</option>
           </select>
         </div>

         <div>
            <label>Date of Sermon</label>
            <input type='date'></input>
         </div>

         <div>
            <input type="file" name="fileInput"/>
         </div>

         <div>
            <input type="submit" value="Submit"/>

         </div>
      </form>
    )
  }
})
