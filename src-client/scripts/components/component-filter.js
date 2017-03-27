import React from 'react'
import ReactDOM from 'react-dom'
import {ACTIONS} from '../actions.js'

let dropDownStyle ={
  position: 'fixed',
	right:'0px', top: '200px',
	height: '250px',
	width: '200px'
}
let dropStyle= {
	padding: '15px',
	background: '#fff',
	border: '1px solid #eee',
   color: 'black',
   textAlign: 'center',
   fontSize: '20px'
}

export const SideBarAnon = React.createClass({
   _handleFilterClick: function(evt){
      evt.preventDefault
      let clickedRoute = evt.target.dataset.route
      let routeMapping = {
         "CLERGY" : 'clergy',
         "CAMPUS" : 'campus',
         "SERIES" : 'series',
         "UPLOAD" : 'upload',
         "LOGIN" : 'login'
      }
      ACTIONS.routeTo(routeMapping[clickedRoute])
   },

   render: function(){
      return (
         <div style={dropDownStyle}>
         <ul style={{listStyleType: 'none', padding: 0}}>
            <li onClick={this._handleFilterClick} style={dropStyle} data-route="CLERGY">Clergy</li>
            <li onClick={this._handleFilterClick} style={dropStyle} data-route="CAMPUS">Campus</li>
            <li onClick={this._handleFilterClick} style={dropStyle} data-route="SERIES">Series</li>
            <li onClick={this._handleFilterClick} style={dropStyle} data-route="UPLOAD">Upload</li>
            <li onClick={this._handleFilterClick} style={dropStyle} data-route="LOGIN">LOGIN</li>
         </ul>
      </div>
   )
   }
})







// ReactDOM.render(<form/>, document.querySelector('#col-sm-4'));
