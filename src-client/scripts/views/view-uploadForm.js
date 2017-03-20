import React from 'react'
import {ACTIONS} from '../actions.js'
import {STORE} from '../store.js'

export const UploadFormView = React.createClass({

  render: function(){
    return (
      <div className="container-form">
      <uploadFormComponent/>
      </div>
    )
  }
})
