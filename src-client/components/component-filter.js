import React from 'react'
import ReactDOM from 'react-dom'

let dropDownStyle ={
   color: 'black'
}

export const DropDownBox = React.createClass({
   _makeFilterList: function(evt){
      evt.preventDefault();
      let fromEl = evt.target
      let filterValsObject = {
         clergy: 'something',
         campus: 'something else',
         series: 'something more'
      }
   },
      render: function(){

         return (
            <div className="col-sm-4">
               <h2 style={dropDownStyle}> whoa! </h2>
            </div>
         )
      }
})



// ReactDOM.render(<form/>, document.querySelector('#col-sm-4'));
