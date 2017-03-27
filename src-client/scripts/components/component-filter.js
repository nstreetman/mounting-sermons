import React from 'react'
import ReactDOM from 'react-dom'
import {ACTIONS} from '../actions.js'

let dropDownStyle ={
  position: 'fixed',
	right:'0px', top: '200px',
	height: '250px',
	width: '200px'
}
let dropStyle= {
	padding: '15px',
	background: '#fff',
	border: '1px solid #eee',
   color: 'black',
   textAlign: 'center',
   fontSize: '20px'
}

export const SideBarAnon = React.createClass({


   _handleFilterClick: function(evt){
      evt.preventDefault()
      this.props.updateSearch(evt.target.value)
      // let clickedRoute = evt.target.value
      // console.log(evt.target.name)
      // let routeMapping = {
      //    "CLERGY" : 'clergy',
      //    "CAMPUS" : 'campus',
      //    "SERIES" : 'series',
      //    "UPLOAD" : 'upload',
      //    "LOGIN" : 'login'
      // }
      // localhost:3000#/filter/clergy="chrisWarner"/campus=""/series=""
      // ACTIONS.routeTo(routeMapping[clickedRoute])
   },
   _renderSecondDropDown: function(){
      if(this.props.searchType === 'All'){
         return
      }if(this.props.searchType === 'campus'){
         return(
            <div className='form-field'>
               <label>Campus</label>
               <select name="CAMPUS" onChange={this._handleFilterClick}>
                  <option data-route="CAMPUS">Sullivan Island</option>
                  <option data-route="CAMPUS">Daniel Island</option>
                  <option data-route="CAMPUS">IOn</option>
               </select>
            </div>
         )
      }if(this.props.searchType === "pastor"){
         return(
            <div className='form-field'>
               <label>Clergy</label>
               <select name="PASTOR" onChange={this._handleFilterClick}>
                  <option data-route="PASTOR">Rev. Chris Warner</option>
                  <option data-route="PASTOR">The Rev. Jonathan Bennett</option>
                  <option data-route="PASTOR">The Rev. Sean Norris</option>
               </select>
            </div>
         )
      }else{
         return(
            <div className='form-field'>
               <label>Series</label>
               <select name="SERIES" onChange={this._handleFilterClick} data-route="SERIES">Crazy Busy</select>
            </div>
         )
      }
   },

   render: function(){
      console.log(this.props.searchType)
      return (
         <div>
         <div className='form-field'>
            <label>Search By:</label>
            <select name="searchType" onChange={this._handleFilterClick}>
               <option data-route="SERIES">All</option>
               <option data-route="SERIES">pastor</option>
               <option data-route="SERIES">campus</option>
               <option data-route="SERIES">series</option>

            </select>
         </div>

            {this._renderSecondDropDown()}
         </div>
   )
   }
})
