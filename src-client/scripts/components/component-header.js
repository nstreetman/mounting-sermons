import React from 'react'
import ReactDOM from 'react-dom'


export const HeaderComponent = React.createClass({
   render: function(){
      return(
         <div className="header container-fluid">
            <div className="row top-menu"><a href="http://www.holycross.net/">HOME</a></div>
            <div className="row top-menu"><a href="http://www.holycross.net/whoweare/">ABOUT</a></div>
            <div className="row top-menu"><a href="http://www.holycross.net/worship/">WORSHIP</a></div>
            <div className="row top-menu"><img src="../images/HClogo.png"/></div>
            <div className="row top-menu"><a href="http://www.holycross.net/contact/">CONTACT</a></div>
            <div className="row top-menu"><a href="http://www.holycross.net/events/">EVENTS</a></div>
            <div className="row top-menu"><a href="http://www.holycross.net/howdoi/">HOW DO I...</a></div>
         </div>
      )
   }
})
