import ReactDOM from 'react-dom'
import React from 'react'
import Backbone from 'backbone'

import {ViewController} from './viewController.js'
import {SermonCollection} from './models/model-sermon.js'
import {HomeView} from './views/view-home.js'

ReactDOM.render(<ViewController/>, document.querySelector('#app-container'))

// import {campusView} from './views/campus_view.js'
// import {clergyView} from './views/clergy_view.js'
// import {formView} from './views/form_view.js'
// import {seriesView} from '.views/series_view.js'

// const AppRouter = Backbone.Router.extend({
//    initialize: function(){
//       Backbone.history.start()
//       console.log('wired up');
//    },
//    routes : {
//       'home' : 'showHomeView',
//       'clergy' : 'showClergyView',
//       'series' : 'showSeriesView',
//       'campus' : 'showCampusView',
//       'form' : 'showFormView'
//    },
//
//    showHomeView: function(){
//       // get.json from youtube API/////
//       ReactDOM.render(<HomeView/>, document.querySelector('#app-container'))
//    },
//
//    showClergyView: function(){
//       // get.json from youtube API/////
//       reactDom.render(<ClergyView/>, document.querySelector('#col-sm-8'))
//    },
//
//    showSeriesView: function(){
//       // get.json from youtube API///////
//       reactDOM.render(<SeriesView/>, document.querySelector('#col-sm-8'))
//    },
//
//    showCampusView: function(){
//       // get.json from youtube API///////
//       reactDOM.render(<CampusView/>, document.querySelector('#col-sm-8'))
//    },
//
//    showFormView: function(){
//       // get.json from youtube API///////
//       reactDOM.render(<FormView/>, document.querySelector('#app-container'))
//    },
//
// })
// new AppRouter
