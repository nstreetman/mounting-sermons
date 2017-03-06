import React from 'react'
import Backbone from 'backbone'
import {ShoutModel} from '../models/model-shout.js'
import {ACTIONS} from '../actions.js'

export const NewShoutComponent = React.createClass({
	_handleNewShoutItem: function(evt){
		evt.preventDefault();
		console.log(evt.target)
		let formEl = evt.target
		let formValsObj = {
			msg : formEl.theMsgEl.value, 
			from : formEl.msgFromEl.value, 
			imgLink : formEl.imgInputEl.value, 
			rating : formEl.ratingOptionsEl.value
		}
		
		ACTIONS.saveNewShout(formValsObj)
		
	},
	
   render: function(){

      return (
       <div className="col-sm-4 new-shoutout">
            <h3>Your Message</h3>
				<form onSubmit={this._handleNewShoutItem}>
	            <input type="text" className="form-control" name="theMsgEl"/>

	            <hr/>

	            <h4>Message From </h4>
	            <input type="text" className="form-control" name="msgFromEl"/>

	            <hr/>

	            <h4>Add Image</h4>

	            <input type="text" className="form-control" name="imgInputEl"/>
	            <button className="btn btn-block btn-default btn-warning btn-sm" onClick={this._handleImgPreviewClick} >Add Image</button>

	            <br/>

	            <div href="#" className="thumbnail">
	                  <img src="" alt="no image found"/>
	            </div>

	            <select className="form-control" name="ratingOptionsEl">
	              <option value="G">Family Friendly (G)</option>
	              <option value="PG">Parental Guidance (PG)</option>
	              <option value="R">Mature Audiences (R)</option>
	            </select>

	            <br/>
	            <button className="btn btn-block btn-success btn-lg" type="submit">+</button>
				</form>
      </div>
      )
   }
})