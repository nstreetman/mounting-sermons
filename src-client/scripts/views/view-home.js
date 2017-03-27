import React from 'react'
import {ACTIONS} from '../actions.js'
import {SideBarAnon} from '../components/component-filter.js'
let textColor ={
   color: 'black'
}
export const HomeView = React.createClass({
   getInitialState: function(){
      return {
         searchType: "pastor",
         searchValue: ""
      }
   },
   _showSermons: function(data){
      // data.map(function(sermObj){
      //    return(
      //       <h1></h1>
      //    )
      // })
      return (
         <h1>i'm the sermon</h1>
      )
   },
   _updateType: function(value){
      this.setState({searchType: value})
   },
   _updateSearchValue: function(value){
      this.setState({searchValue: value})
   },
   // {
// _id: "58d933b5e885a9197de7d9b6",
// pastor: "Trevor Spencer",
// series: "Formed in Christ",
// campus: "Daniel Island",
// date: "2017-03-13T14:46:25.000Z",
// ytVideoId: "wIOaKeHvLLg",
// filestackUrl: "https://cdn.filestackcontent.com/wzKIOaFxTqcG0noLKZSw",
// __v: 0
// },

   render: function(){
      let filteredSermons = this.props.allSermons.filter(function(obj){
         if(this.state.searchType === "All" || this.state.searchValue === ""){
            return true
         }
         if(obj[this.state.searchType] === this.state.searchValue){
            return true
         }
      })
      console.log(this.state)
      return(
         <div className="M-bg-fail">
            <SideBarAnon updateValue={this._updateSearchValue}
                         updateSearch={this._updateType}
                         searchType={this.state.searchType}/>
            <h1> Default view: </h1>
            <h2>See unfiltered sermons from recent weeks here</h2>
            <div>
            {this._showSermons(filteredSermons)}
            </div>

         </div>
      )
   }
})
