import React from 'react'
import YouTubeAudio from 'react-youtube-audio'
import {ACTIONS} from '../actions'

export const AudioComponent = React.createClass({

   render: function(){
      return (
         <div className="YouTube">
            <YouTubeAudio/>
         </div>
      )
   }
})
