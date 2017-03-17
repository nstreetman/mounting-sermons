import React from 'react'
import ReactDOM from 'React-dom'

export const DropDownBox = React.createClass({
   _makeFilterList: function(evt){
      evt.preventDefault();
      let fromEl = evt.target
      let filterValsObject = {
         clergy:
         campus:
         series:
      }
   },
      render: function(){

         return (
            <div className="col-sm-4">
               <h2> whoa!</h2>
            </div>
         )
      }
   }
})


ReactDOM.render(<form/>, document.querySelector('#col-sm-4'));
