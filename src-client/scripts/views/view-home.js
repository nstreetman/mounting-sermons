import React from 'react'
import {ACTIONS} from '../actions.js'
import {SideBarAnon} from '../components/component-filter.js'
import YouTubeAudio from '../components/yt-player/player.js'
import moment from 'moment'

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
               <p>Date: {moment(sermObj.date).format('dddd MMMM D, YYYY')}</p>
               <p>Campus: {sermObj.campus}</p>
               <p>Pastor: {sermObj.pastor}</p>
               <p>Series Name: {sermObj.series}</p>
               <p><span className="download"><a href="{sermonObj.filestackUrl}"><em>Download this Sermon</em></a></span></p>
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

         console.log(obj[component.state.searchType], 'filter type')
         if(component.state.searchType === "All" || component.state.searchValue === ""){
            console.log('returninng all ')
            return true
         }
         if(obj[component.state.searchType] === component.state.searchValue){
            console.log('returninng filtered ')

            return true
         }
      })
      return(
         <div className="sermon-view">
            <div className="heading-sermons">
            <h1>Sunday Sermons</h1>
            <h4>EACH SUNDAY'S SERMONS ARE UPLOADED HERE ON MONDAYS. WE REGULARLY FEATURE SERMON SERIES, AND MANY OF THESE SERMONS ARE PART OF A SERIES. USE THE DROP DOWN LIST BELOW TO SEARCH RECORDINGS BY PASTOR, CAMPUS OR SERIES.</h4>
            </div>
            <SideBarAnon
               updateValue={this._updateSearchValue}
               updateSearch={this._updateType}
               searchType={this.state.searchType}
               sermons={this.props.allSermons}
            />
            <div>
            {this._showSermons(filteredSermons)}
            </div>

         </div>
      )
   }

})
