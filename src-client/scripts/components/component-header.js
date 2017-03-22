import React from 'react'
import ReactDOM from 'react-dom'


export const HeaderComponent = React.createClass({
   render: function(){
      return(
         <div className="header container-fluid">
            <div className="row top-menu">Home</div>
            <div className="row top-menu">About</div>
            <div className="row top-menu">Worship</div>
            <div className="row top-menu"><img src="./dist/images/HClogo.png"/></div>
            <div className="row top-menu">Contact</div>
            <div className="row top-menu">Events</div>
            <div className="row top-menu">How Do I...</div>
         </div>
      )
   }
})
