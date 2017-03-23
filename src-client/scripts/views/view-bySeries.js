import React from 'react'
import YouTubeAudio from 'react-youtube-audio'

export const SeriesView = React.createClass({
   render: function(){
      return(
         <div className="seriesView">
            <h2>Filtered by Series view: </h2>
            <h3>
               Here they should see sermons from a particular series that they have
               selected from a dropdown list of sermon series options on the filter bar
            </h3>
         </div>
      )
   }
})
