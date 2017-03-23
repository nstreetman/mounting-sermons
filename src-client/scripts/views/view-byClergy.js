import React from 'react'
import YouTubeAudio from 'react-youtube-audio'

export const ClergyView = React.createClass({
   render: function(){
      return(
         <div className='clergyView'>
         <h2>Filtered by Clergy view: </h2>
         <YouTubeAudio videoId="wIOaKeHvLLg" name="Mr. Rev Sean Norris" title="Daniel Island" collection="Generous Hearts"/>

         <h3>Here they should see sermons from a particular priest that they have selected from a dropdown list of clergy options on the filter bar</h3>
         </div>
      )
   }
})
