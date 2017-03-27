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
               <select>
                  <option onClick={this._handleFilterClick} style={dropStyle} data-route="CAMPUS">Sullivan Island</option>
                  <option onClick={this._handleFilterClick} style={dropStyle} data-route="CAMPUS">Daniel Island</option>
                  <option onClick={this._handleFilterClick} style={dropStyle} data-route="CAMPUS">IOn</option>
               </select>
            </div>
         )
      }if(this.props.searchType === "pastor"){
         return(
            <div className='form-field'>
               <label>Clergy</label>
               <select name="CLERGY" onChange={this._handleFilterClick}>
                  <option value="rev='chrisWarner'" onClick={this._handleFilterClick} style={dropStyle} data-route="CLERGY">The Rev. Chris Warner</option>
                  <option onClick={this._handleFilterClick} style={dropStyle} data-route="CLERGY">The Rev. Sean Morris</option>
                  <option onClick={this._handleFilterClick} style={dropStyle} data-route="CLERGY">The Rev. Trevor Spencer</option>
                  <option onClick={this._handleFilterClick} style={dropStyle} data-route="CLERGY">The Rev. Jonathan Bennett</option>
               </select>
            </div>
         )
      }else{
         return(
            <div className='form-field'>
               <label>Series</label>
               <select name="SERIES" onChange={this._handleFilterClick}>
                  <option onClick={this._handleFilterClick} style={dropStyle} data-route="SERIES">Genrous Hearts</option>
                  <option onClick={this._handleFilterClick} style={dropStyle} data-route="SERIES">Life Together</option>
                  <option onClick={this._handleFilterClick} style={dropStyle} data-route="SERIES">Formed</option>
                  <option onClick={this._handleFilterClick} style={dropStyle} data-route="SERIES">Crazy Busy</option>
               </select>
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
               <option onClick={this._handleFilterClick} style={dropStyle} data-route="SERIES">All</option>
               <option onClick={this._handleFilterClick} style={dropStyle} data-route="SERIES">pastor</option>
               <option onClick={this._handleFilterClick} style={dropStyle} data-route="SERIES">campus</option>
               <option onClick={this._handleFilterClick} style={dropStyle} data-route="SERIES">series</option>

            </select>
         </div>


            {this._renderSecondDropDown()}
         </div>
   )
   }
})
