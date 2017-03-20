import React from 'react'
import ReactDOM from 'react-dom'

let footerStyle = {
   color: 'red'
}

export const FooterComponent = React.createClass({
   // _makeFooter: function(evt){
   //    evt.preventDefault();
   //    let formEl = evt.target
   //    let footerValsObject = {
   //
   //    }
   // },
      render: function(){

         return(
            <div className="container">
               <h2 style={footerStyle}> footer Component </h2>
            </div>
         )
      }
})
