import Backbone from 'backbone'
import {ACTIONS} from './actions.js'

export const AppRouter = Backbone.Router.extend({
	initialize: function(){
		Backbone.history.start();
	},

	routes: {
    'campus' : 'routeToCampus',
    'clergy' : 'routeToClergy',
    'series' : 'routeToSeries',
	 'search/:clergy/:series/:campus': 'routeToSeries',
    'upload': 'routeToUpload',
		'login': 'routeToLogin',
		'' : 'routeToHome',
		'*nomatch': 'routeTo404'
	},

  routeToCampus: function(){
    ACTIONS.setView("CAMPUS")
  },

  routeToClergy: function(){
    ACTIONS.setView("CLERGY")
  },

  routeToSeries: function(clergy, series, campus){
	  console.log(clergy, series, campus)
    ACTIONS.setView("SERIES")
  },

  routeToUpload: function(){
    ACTIONS.setView("UPLOAD")
  },

	routeToLogin: function(){
		ACTIONS.setView("LOGIN")
	},

	routeToHome: function(){
		ACTIONS.setView("HOME")
	},

	routeTo404: function(){
		ACTIONS.setView("404")
	}
})
