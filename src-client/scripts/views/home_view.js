import React from 'react'
import {ACTIONS} from '../actions.js'

export const HomeView = React.createClass({
   getInitialState: function(){
      return {
         sermonsList: []
      }
   },

   componentDidMount: function(){
      let component = this
      ACTIONS.fetchAllSermons().then(function(serverRes){
         component.setState({sermonsList: serverRes})
      })
   },

   render: function(){
      return(
         <div className="container">
            <h1> something to show!!!! </h1>
            <p> something more </p>
            <p> even more </p>
            <componentFilter/>
            <componentSermons/>
         </div>
      )
   }
})
