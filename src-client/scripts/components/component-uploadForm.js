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
    let formEl = uploadform
    let sermonModel = new SermonModel()
      sermonModel.set({
      // let formData = {
          pastor: formEl.clergy.value,
          series: formEl.series.value,
          campus: formEl.campus.value,
          date: formEl.date.value,
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
          <select name="clergy">
            <option value="The Rev. Jonathan Bennett">Jonathan Bennett</option>
            <option value="The Rev. Richard Grimball">Richard Grimball</option>
            <option value="The Rt. Rev. Mark Lawrence">Bishop Lawrence</option>
            <option value="Mr. Zach Miller">Zach Miller</option>
            <option value="The Rev. Kate Norris">Kate Norris</option>
            <option value="The Rev. Sean Norris">Sean Norris</option>
            <option value="The Rev. Trevor Spencer">Trevor Spencer</option>
            <option value="The Rev. Chris Warner">Chris Warner</option>
        </select>
      </div>

         <div className="form-field form-uploads">
             <label>Sermon Series</label>
             <select name="series">
               <option value="Generous Hearts">Generous Hearts</option>
               <option value="Life Together">Life Together</option>
               <option value="Formed In Christ">Formed In Christ</option>
               <option value="Crazy Busy">Crazy Busy</option>
               <option value="Traveling Light">Traveling Light</option>
               <option value="Faith at Work">Faith at Work</option>
               <option value="Follow the Leader">Follow the Leader</option>
               <option value="Christmas 2016">Christmas 2016</option>
               <option value="Easter 2017">Easter 2017</option>
               <option value="None">None</option>
           </select>
         </div>

         <div className="form-field form-uploads">
             <label>Campus</label>
             <select name="campus">
               <option value="Sullivan's Island">Sullivan&#8217;s Island</option>
               <option value="Daniel Island">Daniel Island</option>
               <option value="I'On">I&#8217;On</option>
           </select>
         </div>

         <div className="form-field form-uploads">
            <label>Date of Sermon</label>
            <input type='date' name="date"></input>
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
