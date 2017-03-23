import React from 'react'
import YouTubeAudio from 'react-youtube-audio'

export const AudioComponent = React.createClass({
   render: function(){
      return (
         <div classname="YouTube">
            <YouTubeAudio videoId="T8Bej9UMe2U" name="Great Things" title="looking up" collection="silent hearts"/>
         </div>
      )
   }
})
