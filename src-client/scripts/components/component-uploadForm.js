import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import {SermonModel} from '../models/model-sermon.js'
import {SermonCollection} from '../models/model-sermon.js'
import {ACTIONS} from '../actions.js'

export const UploadFormComponent = React.createClass({

  _handleSermonSubmit: function(evt){
    evt.preventDefault();
    let formEl = evt.target
    let formData= {
      name: "The Rev. Chris Warner",
      dateOfSermon: '12/12/10',
      campus: "Daniel Island",
      series: "Formed In Christ",
      fileUpload: this.state.currentFileUploaded
    }

    console.log(formData)
    ACTIONS.saveNewSermon(formData)
  },

  _handleFileUpload: function(evt){
    let component= this
    let fileInputEl=evt.target

    let reader = new FileReader()
    let theFile = fileInputEl.files[0]

    reader.addEventListener('load', function(evt){
        console.log('file loaded! ...', evt.target.result)
        component.setState({
          currentFileUploaded  : evt.target.result
        })
    })

    // reader.addEventListener('progress', function(evt){
    //     console.log('loading progress ...', evt.loaded, ' / ', evt.total)
    // })

    console.log('reading file contents...', theFile)
    reader.readAsDataURL(theFile)

  },
  render: function(){
    return (

      <form name="uploadform" onSubmit={this._handleSermonSubmit} className="M-form-group M-grid">
      <div className="form-field M-sm-12-of-12 M-md-6-of-12">
          <label>Clergy</label>
          <select>
            <option value="Warner">The Rev. Chris Warner</option>
            <option value="Norris">The Rev. Sean Norris</option>
            <option value="Spencer">The Rev. Trevor Spencer</option>
            <option value="Bennett">The Rev. Jonathan Bennett</option>
            <option value="AddNew">Add New...</option>
        </select>
      </div>

         <div className="form-field M-sm-12-of-12 M-md-6-of-12">
             <label>Sermon Series</label>
             <select>
               <option value="GenHearts">Generous Hearts</option>
               <option value="LifeTogether">Life Together</option>
               <option value="Formed">Formed</option>
               <option value="CrazyBusy">Crazy Busy</option>
               <option value="AddNew">Add New...</option>
           </select>
         </div>

         <div className="form-field M-sm-12-of-12 M-md-6-of-12">
             <label>Campus</label>
             <select>
               <option value="SI">Sullivan&#8217;s Island</option>
               <option value="DI">Daniel Island</option>
               <option value="ION">I&#8217;On</option>
           </select>
         </div>

         <div>
            <label>Date of Sermon</label>
            <input type='date'></input>
         </div>

         <div>
            <input type="file" onChange={this._handleFileUpload}/>
         </div>

         <div>
            <input type="submit"></input>

         </div>
      </form>
    )
  }
})
