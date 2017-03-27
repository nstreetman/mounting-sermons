import React from 'react'
import YouTubeAudio from 'react-youtube-audio'
import {ACTIONS} from '../actions'

export const AudioComponent = React.createClass({
   getInitialState: function(){
      return{
         series: 'SERIES'
      }
   },
   _handleNewSeries: function(evt){
      evt.preventDefault();
      let sermonEL = evt.target
      let sermonElObj = {
         campus: sermonEl.sermonElObj.campus,
         clergy: sermonEl.sermonElObj.clergy,
         series: sermonEl.sermonElObj.series
      }
      ACTIONS.saveNewSermon(sermonElObj)
   },


   render: function(){
      return (
         <div className="YouTube">
            <YouTubeAudio/>
         </div>
      )
   }
})
