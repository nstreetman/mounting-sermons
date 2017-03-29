import React from 'react';
import ReactDOM from 'react-dom';
import Backbone from 'backbone';
import {SermonModel} from '../models/model-sermon.js';
import {SermonCollection} from '../models/model-sermon.js';
import {ACTIONS} from '../actions.js';

function log (serverRes){
  console.log(serverRes)
}

export const UploadFormComponent = React.createClass({
  _handleUploads: function(evt){
    evt.preventDefault()
    let fileInputEl = evt.target.fileInput
    let theFile = fileInputEl.files[0]
    let client = filestack.init('AoR65q9vnRxqb5UWVJEGBz')
    console.log('uploading file...')
    client.upload(theFile).then(function(fileStackRes){
      console.log(fileStackRes)

      // _handleSermonSubmit: function(evt){
      //   evt.preventDefault();
        // let formEl = evt.target

    // YtApiModule.uploadMetaData(/*{...videoMetaData}*/).then(function(ytUploadToken){
    //   theFile
    // })

    let sermonModel = new SermonModel()
      sermonModel.set({
      // let formData = {
          pastor: 'The Rev. Chris Warner',
          series: 'Crazy Busy',
          campus: 'Daniel Island',
          date: '12/12/10',
          ytVideoId: 'a_tbxGZuukQ',
          filestackUrl: fileStackRes.url
      })
    sermonModel.save().then(function(serverRes){
      console.log (serverRes)

    })
  })
  },

  render: function(){
    return (
      <form name="uploadform" onSubmit={this._handleUploads} method='post'>
      <div className="container-upload-form">
      <h1>Sermon Upload Form</h1>

      <div className="form-field form-uploads">
          <label>Clergy</label>
          <select>
            <option value="The Rev. Chris Warner">The Rev. Chris Warner</option>
            <option value="The Rev. Sean Norris">The Rev. Sean Norris</option>
            <option value="The Rev. Trevor Spencer">The Rev. Trevor Spencer</option>
            <option value="The Rev. Jonathan Bennett">The Rev. Jonathan Bennett</option>
            <option value="AddNew">Add New...</option>
        </select>
      </div>

         <div className="form-field form-uploads">
             <label>Sermon Series</label>
             <select>
               <option value="Generous Hearts">Generous Hearts</option>
               <option value="Life Together">Life Together</option>
               <option value="Formed In Christ">Formed In Christ</option>
               <option value="Crazy Busy">Crazy Busy</option>
               <option value="None">None</option>
               <option value="Add New">Add New...</option>
           </select>
         </div>

         <div className="form-field form-uploads">
             <label>Campus</label>
             <select>
               <option value="SI">Sullivan&#8217;s Island</option>
               <option value="DI">Daniel Island</option>
               <option value="ION">I&#8217;On</option>
           </select>
         </div>

         <div className="form-field form-uploads">
            <label>Date of Sermon</label>
            <input type='date'></input>
         </div>

         <div className="form-field form-uploads form-file-input">
            <input type="file" name="fileInput"/>
         </div>

         <div className="form-field form-uploads">
            <input type="submit" value="Submit"/>
         </div>
         </div>
      </form>
    )
  }
})
