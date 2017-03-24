import React from 'react'
import YouTubeAudio from 'react-youtube-audio'
import {ACTIONS} from '../actions'

export const AudioComponent = React.createClass({
   _HandlingSeriesSermon: function(evt){
      let selectedSeries = evt.target.dataset.route

   },
   _handlingClergySermon: function(evt){
      let selectedClery = evt.target.dataset.route

   },
   _handlingCampusSermon: function(evt){
      let selectedCampus = evt.target.dataset.route

   },
   
   render: function(){
      return (
         <div classname="YouTube">
            <YouTubeAudio/>
         </div>
      )
   }
})
