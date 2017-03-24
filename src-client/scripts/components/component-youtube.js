import React from 'react'
import YouTubeAudio from 'react-youtube-audio'
import {ACTIONS} from '../actions'

export const AudioComponent = React.createClass({
   // getInitialState:function(){
   //    return(
   //
   //    )
   // }



   render: function(){
      return (
         <div classname="YouTube">
            <YouTubeAudio videoId={this.props.audioId} name="Great Things" title="looking up" collection="silent hearts"/>
         </div>
      )
   }
})
