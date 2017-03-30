import React from 'react'
import ReactDOM from 'react-dom'


export const HeaderComponent = React.createClass({
   render: function(){
      return(
         <div className="header top-menu flex-container">
            <div className="top-menu flex-item mo_bars"><i className="fa fa-bars" aria-hidden="true"></i></div>
            <div className="top-menu flex-item navlink"><a href="http://www.holycross.net/">HOME</a></div>
            <div className="top-menu flex-item navlink"><a href="http://www.holycross.net/whoweare/">ABOUT</a></div>
            <div className="top-menu flex-item navlink"><a href="http://www.holycross.net/worship/">WORSHIP</a></div>
            <div className="top-menu flex-item logo"><img src="../images/HClogo.png"/></div>
            <div className="top-menu flex-item navlink"><a href="http://www.holycross.net/contact/">CONTACT</a></div>
            <div className="top-menu flex-item navlink"><a href="http://www.holycross.net/events/">EVENTS</a></div>
            <div className="top-menu flex-item navlink"><a href="http://www.holycross.net/howdoi/">HOW DO I...</a></div>
         </div>
      )
   }
})
