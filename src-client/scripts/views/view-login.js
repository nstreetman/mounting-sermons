import React from 'react'
import {ACTIONS} from '../actions.js'
import {STORE} from '../store.js'
import {LoginFormComponent} from '../components/component-loginForm.js'


export const LoginFormView = React.createClass({
  render: function(){
    return(
      <div className="container">
        <LoginFormComponent/>
      </div>
    )
  }
})
