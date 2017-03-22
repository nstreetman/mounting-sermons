import React from 'react'
import {ACTIONS} from '../actions.js'
let textColor ={
   color: 'black'
}
export const HomeView = React.createClass({
   // getInitialState: function(){
   //    return {
   //       sermonsList: []
   //    }
   // },

   render: function(){
      return(
         <div className="M-bg-fail">
            <h1> Default view: </h1>
            <h2>See unfiltered sermons from recent weeks here</h2>
         </div>
      )
   }
})
