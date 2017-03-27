import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import {UserModel} from '../models/model-user.js'
import {ACTIONS} from '../actions.js'

export const LoginFormComponent = React.createClass({

_handleLoginSubmit: ()=>{
  evt.preventDefault();
  let formEl = evt.target
  let formData= {
    email: "holycrosssermons@gmail.com",
    password: "YesChurch1892"
  }
},

render: function(){
    return (

<form className="form-field">
   <div>
   <label>Email:</label>
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
