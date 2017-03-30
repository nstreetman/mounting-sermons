import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import {AdminModel} from '../models/model-admin.js'
import {ACTIONS} from '../actions.js'

export const LoginFormComponent = React.createClass({

_handleLoginSubmit: function(evt){
  evt.preventDefault();
  let formEl = evt.target
  let userVal = formEl.email.value
  let pwVal= formEl.pw.value
  ACTIONS.loginUser(userVal, pwVal)

},

render: function(){
    return (

  <form className="form auth-form" onSubmit={this._handleLoginSubmit}>
     <div>
     <label>Admin Email:</label>
        <input name="email" type="email"></input>
     </div>
     <div>
        <label>Password:</label>
        <input name="pw" type="password"></input>
     </div>
     <div>
        <input type="submit"></input>
     </div>
  </form>
)
}
})
