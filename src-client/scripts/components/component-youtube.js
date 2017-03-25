import React from 'react'
import YouTubeAudio from 'react-youtube-audio'
import {ACTIONS} from '../actions'

export const AudioComponent = React.createClass({
   _HandlingSeriesSermon: function(evt){
      let selectedSeries = evt.target.dataset.route
      console.log('pros#2', selectedSeries);

   },
   render: function(){
      return (
         <div classname="YouTube">
            <YouTubeAudio/>
         </div>
      )
   }
})
