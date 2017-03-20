import React from 'react'
import ReactDOM from 'react-dom'

let headerStyle = {
   color: 'orange'
}
export const HeaderComponent = React.createClass({
   render: function(){
      return(
         <div className="header">
            <h1 style={headerStyle}>header component</h1>
         </div>
      )
   }
})
