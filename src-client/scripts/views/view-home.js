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
            <p> Default view: See unfiltered sermons from recent weeks here </p>
         </div>
      )
   }
})
