import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import {UserModel} from '../models/model-user.js'
import {ACTIONS} from '../actions.js'

export const LoginFormComponent = React.createClass({

_handleLoginSubmit: function(evt){
  evt.preventDefault();
  let formEl = evt.target
  let userVal = "holycrosssermons@gmail.com"
  let pwVal= "YesChurch1892"
  ACTIONS.loginUser(userVal, pwVal)

},

render: function(){
    return (

<form className="form auth-form" onSubmit={this._handleLoginSubmit}>
   <div>
   <label>Admin Email:</label>
      <input type="email"></input>
   </div>
   <div>
      <label>Password:</label>
      <input type="password"></input>
   </div>
   <div>
      <input type="submit"></input>
   </div>
</form>
)
}
})
