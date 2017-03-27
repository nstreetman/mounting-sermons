import React from 'react'
import {ACTIONS} from '../actions.js'
import {SideBarAnon} from '../components/component-filter.js'
import YouTubeAudio from 'react-youtube-audio'


export const HomeView = React.createClass({
   getInitialState: function(){
      return {
         searchType: "All",
         searchValue: ""
      }
   },

   _showSermons: function(data){
      console.log(data);
      return data.map(function(sermObj){
         return(
         <div>
         all sermon info inside containing div
         </div>

         )
      })
      // return (
      //    <YouTubeAudio/>
      // )
   },

   _updateType: function(value){
      this.setState({searchType: value})
   },
   _updateSearchValue: function(value){
      console.log(value)
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

      console.log('whoa', this.state)
      let component = this
      let filteredSermons = this.props.allSermons.filter(function(obj){
         if(component.state.searchType === "All" || component.state.searchValue === ""){
            return true
         }
         if(obj[component.state.searchType] === component.state.searchValue){
            return true
         }
      })
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
