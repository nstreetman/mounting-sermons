import React from 'react'

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
            <componentFilter/>
            <componentSermons/>
         </div>
      )
   }
})
