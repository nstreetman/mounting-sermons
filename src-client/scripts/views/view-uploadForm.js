import React from 'react'
import {ACTIONS} from '../actions.js'
import {STORE} from '../store.js'
import {uploadFormComponent} from './components/component-uploadForm.js'

export const UploadFormView = React.createClass({

  render: function(){
    return (
      <div className="container-form">
      <uploadFormComponent/>
      </div>
    )
  }
})
