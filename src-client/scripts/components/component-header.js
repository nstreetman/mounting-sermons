import React from 'react'
import ReactDOM from 'react-dom'


export const HeaderComponent = React.createClass({
   render: function(){
      return(
         <div className="header container-fluid">
            <div className="top-menu mobile_bars"><a href="#"><i className="fa fa-bars" aria-hidden="true"></i></a></div>
            <div className="row top-menu navlink"><a href="http://www.holycross.net/">HOME</a></div>
            <div className="row top-menu navlink"><a href="http://www.holycross.net/whoweare/">ABOUT</a></div>
            <div className="row top-menu navlink"><a href="http://www.holycross.net/worship/">WORSHIP</a></div>
            <div className="row top-menu logo"><img src="../images/HClogo.png"/></div>
            <div className="row top-menu navlink"><a href="http://www.holycross.net/contact/">CONTACT</a></div>
            <div className="row top-menu navlink"><a href="http://www.holycross.net/events/">EVENTS</a></div>
            <div className="row top-menu navlink"><a href="http://www.holycross.net/howdoi/">HOW DO I...</a></div>
         </div>
      )
   }
})
