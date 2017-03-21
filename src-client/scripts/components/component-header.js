import React from 'react'
import ReactDOM from 'react-dom'

// let headerStyle = {
//    color: 'orange',
//    height: 15%,
// }

export const HeaderComponent = React.createClass({
   render: function(){
      return(
         <div className="header">
            <h1>header component</h1>
         </div>
      )
   }
})
