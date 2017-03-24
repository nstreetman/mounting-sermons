import React from 'react'
import YouTubeAudio from 'react-youtube-audio'
import {ACTIONS} from '../actions'

export const AudioComponent = React.createClass({
      // _handleSermonInfo: function(currentSermonData){
      //    let currentSermonData = {
      //       videoID: "",
      //       name: "",
      //       title: "",
      //       collection: ""
      //    }
   render: function(){
      return (
         <div classname="YouTube">
            <YouTubeAudio/>
         </div>
      )
   }
})
