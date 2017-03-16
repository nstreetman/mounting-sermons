import ReactDOM from 'react-dom'
import React from 'react'
import Backbone from 'backbone'
import $ from 'jquery'

// import {campusView} from '../views/campus_view.js'
// import {clergyView} from '../views/clergy_view.js'
// import {formView} from '../views/form_view.js'
// import {homeView} from '../views/home_view.js'
// import {seriesView} from '..views/series_view.js'

const appRouter = Backbone.Router.extend({
   initialize: function(){
      Backbone.history.start()
   },
   routes : {
      'home' : 'showHomeView',
      'clergy' : 'showClergyView',
      'series' : 'showSeriesView',
      'campus' : 'showCampusView',
      'form' : 'showFormView'
   },

   showHomeView: function(){
      // get.json from youtube API/////
      ReactDOM.render(<home/>, document.querySelector('#app-container'))
   },

   showClergyView: function(){
      // get.json from youtube API/////
      reactDom.render(<clergy/>, document.querySelector('#app-container'))
   },

   showSeriesView: function(){
      // get.json from youtube API///////
      reactDOM.render(<series/>, document.querySelector('#app-container'))
   },

   showCampusView: function(){
      // get.json from youtube API///////
      reactDOM.render(<campus/>, document.querySelector('#app-container'))
   },

   showFormView: function(){
      // get.json from youtube API///////
      reactDOM.render(<form/>, document.querySelector('#app-container'))
   },

})
let myApp = new appRouter
