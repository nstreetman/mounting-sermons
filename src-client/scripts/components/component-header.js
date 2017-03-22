import React from 'react'
import ReactDOM from 'react-dom'


export const HeaderComponent = React.createClass({
   render: function(){
      return(
         <div className="header container-fluid">
            <div className="row top-menu">HOME</div>
            <div className="row top-menu">ABOUT</div>
            <div className="row top-menu">WORSHIP</div>
            <div className="row top-menu"><img src="../images/HClogo.png"/></div>
            <div className="row top-menu">CONTACT</div>
            <div className="row top-menu">EVENTS</div>
            <div className="row top-menu">HOW DO I...</div>
         </div>
      )
   }
})
