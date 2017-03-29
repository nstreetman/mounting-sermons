import React from 'react'
import ReactDOM from 'react-dom'
import {ACTIONS} from '../actions.js'

let dropDownStyle ={
    position: 'fixed',
  	right:'0px', top: '200px',
    padding: '10px',
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
   },
   _handleSelectedSearch: function(evt){
      evt.preventDefault()
      console.log(evt.target.value)
      this.props.updateValue(evt.target.value)
   },

   _renderSecondDropDown: function(valuesToRender){

      if(this.props.searchType === 'All'){
         return
      }
      let searchOptions  = [];
      let numOfSermons = valuesToRender.length;
      for (var i = 0; i < numOfSermons; i++) {
          if(searchOptions.indexOf(valuesToRender[i][this.props.searchType]) == -1){
              searchOptions.push(valuesToRender[i][this.props.searchType]);
          }
      }
      function capitalizeFirstLetter(string) {
         return string.charAt(0).toUpperCase() + string.slice(1);
      }
      console.log(searchOptions)

      return(
         <div className='form-field'>
            <label>{capitalizeFirstLetter(this.props.searchType)}</label>
            <select onChange={this._handleSelectedSearch}>
            <option value="" key={0}>Select a {this.props.searchType}</option>

               {searchOptions.map((strVals, i)=>{
                  console.log(strVals, 'inside da looop')
                  return(
                     <option key={i +1}>{strVals}</option>
                  )
               })}
            </select>
         </div>
      )

   },

   render: function(){

      return (
         <div>
         <div className='form-field'>
            <label>Search By:</label>
            <select name="searchType" onChange={this._handleFilterClick}>
               <option  data-route="All">All</option>
               <option  value="pastor" data-route="PASTOR">Pastor</option>
               <option  value="campus" data-route="CAMPUS">Campus</option>
               <option  value="series" data-route="SERIES">Series</option>

            </select>
         </div>
            {this._renderSecondDropDown(this.props.sermons)}
         </div>
   )
   }
})
