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
      return data.map(function(sermObj,i){
         return(
         <div className="container-player" key={i}>
            <div className="info-block">
               <p>Date: {sermObj.date}</p>
               <p>Campus: {sermObj.campus}</p>
               <p>Pastor: {sermObj.pastor}</p>
               <p>Series Name: {sermObj.series}</p>
            </div>
            <div className="player-block">
               <YouTubeAudio videoId={sermObj.ytVideoId} />
            </div>
         </div>
         )
      })
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
            <h1>Holy Cross Sermons</h1>
            <SideBarAnon updateValue={this._updateSearchValue}
                         updateSearch={this._updateType}
                         searchType={this.state.searchType}/>
            <div>
            {this._showSermons(filteredSermons)}
            </div>

         </div>
      )
   }

})
