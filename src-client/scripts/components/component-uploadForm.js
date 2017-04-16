import React from 'react';
import ReactDOM from 'react-dom';
import Backbone from 'backbone';
import {SermonModel} from '../models/model-sermon.js';
import {SermonCollection} from '../models/model-sermon.js';
import {ACTIONS} from '../actions.js';
import toastr from 'toastr'
import $ from 'jquery'

function log (serverRes){
  console.log(serverRes)
}

export const UploadFormComponent = React.createClass({
  getInitialState: function(){
      return {
        youTubeAuthUrl:''
      }
  },

  _handleUploads: function(evt){
    evt.preventDefault()
    let formEl = evt.target
    let fileInputEl = evt.target.fileInput
    let theFile = fileInputEl.files[0]


    console.log('uploading file...', toastr)
    toastr.info('File Uploading', 'Please wait')

    let dataToUpload = {
      pastor: formEl.clergy.value,
      series: formEl.series.value,
      campus: formEl.campus.value,
      date: formEl.date.value,
      file: theFile
    }

    this._fetchYouTubeToken(function(err, ytOauthToken){
      console.log('TOKEN delivered!!!!', ytOauthToken)
      if (typeof ytOauthToken !== 'undefined'){
        // ACTIONS.uploadToFileStack(dataToUpload)
        console.log('passing token to ACTION')
        ACTIONS.uploadToYoutube(dataToUpload, ytOauthToken)
      }
    })

  },

  _fetchYouTubeToken: function (cbFunc){
    let component = this

    $.getJSON('/oauth/youtube/initialize').then(function(serverRes){
      console.log(serverRes)
      component._fetchCounter = 0
      component._intervalId = setInterval( component._pollForTokenAndUpload(cbFunc) , 500)
      component.setState({
        youTubeAuthUrl: serverRes.youtubeAuthUrl
      })
    })
  },

  _pollForTokenAndUpload: function(cb){
    let component = this

    return function(){
      component._fetchCounter += 1
      $.getJSON('/oauth/youtube/get-token').then(function(serverRes){
        console.log(serverRes)
        if(typeof serverRes.token !== 'undefined'){
          clearInterval(component._intervalId)
          cb(null, serverRes.token)
        }
      })

      if(component._fetchCounter === 180){
        clearInterval(component._intervalId)
        cb('poll-fetch timed out', null)

      }
    }



  },



  render: function(){
    let youTubeAuthButton = ''
    console.log(this.state)
     if (this.state.youTubeAuthUrl.length > 0){
       console.log(this.state)
       youTubeAuthButton = <a target="_blank" href={this.state.youTubeAuthUrl}>authenticate with YouTube</a>
     }

    console.log(youTubeAuthButton)
    return (
      <div>
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
          <div className="you-tube-button">{youTubeAuthButton}</div>
      </div>
    )
  }
})
