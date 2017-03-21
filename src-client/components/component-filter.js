// import React from 'react'
// import ReactDOM from 'react-dom'

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

export const DropDownBox = React.createClass({
   // _makeFilterList: function(evt){
   //    evt.preventDefault();
   //    let fromEl = evt.target
   //    let filterValsObject = {
   //       clergy: 'something',
   //       campus: 'something else',
   //       series: 'something more'
   //    }
   // },
      render: function(){

         return (
            <div style={dropDownStyle}>
               <ul style={{listStyleType: 'none', padding: 0}}>
                  <li style={dropStyle} data-route="CLERGY">Clergy</li>
                  <li style={dropStyle} data-route="CAMPUS">Campus</li>
                  <li style={dropStyle} data-route="SERIES">Series</li>
               </ul>
            </div>
         )
      }
})



// ReactDOM.render(<form/>, document.querySelector('#col-sm-4'));
