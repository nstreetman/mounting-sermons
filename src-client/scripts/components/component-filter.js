import React from 'react'
import ReactDOM from 'react-dom'

let dropDownStyle ={
   position: 'fixed',
	right:0, top: 150,
	height: '50%',
	background: 'red',
	padding: 0,
	width: '280px'
}
let dropStyle= {
	padding: '12px',
	background: '#ddd',
	border: '1px solid #333'
}
export const SideBarAnon = React.createClass({
   _handleFilterClick: function(evt){
      evt.preventDefault
      let clickedRoute = evt.target.dataset.route
      let routeMapping = {
         "CLERGY" : 'clergy',
         "CAMPUS" : 'campus',
         "SERIES" : 'series'
      }
      ACTIONS.routeTo(routeMapping[clickedRoute])
   },

   render: function(){
      return <div style={dropDownStyle}>
         <ul style={{listStyleType: 'none', padding: 0}}>
            <li onClick={this._handleFilterClick} style={dropStyle} data-route="CLERGY">Clergy</li>
            <li onClick={this._handleFilterClick} style={dropStyle} data-route="CAMPUS">Campus</li>
            <li onClick={this._handleFilterClick} style={dropStyle} data-route="SERIES">Series</li>
            <li onClick={this._handleFilterClick} style={dropStyle} data-route="LOGIN">Series</li>
            <li onClick={this._handleFilterClick} style={dropStyle} data-route="FORM">Series</li>
         </ul>
      </div>
   }
})





// ReactDOM.render(<form/>, document.querySelector('#col-sm-4'));
