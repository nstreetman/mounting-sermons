import Backbone from 'backbone';
import ReactDOM from 'react-dom'
import React from 'react'
import {HomeView} from './views/view-home.js'
import {ShoutCollection} from './models/model-shout.js'


const AppRouter = Backbone.Router.extend({
	initialize: function(){
		Backbone.history.start()
	},
	
	routes: {
		'' : 'showHome'
	},
	
	showHome: function(){
		ReactDOM.render(<HomeView />, document.querySelector('#app-container'))
	}
	
})

new AppRouter()

// [
// 	{from: 'Thomas', msg: 'sail away', imgLink: 'https://unsplash.it/900/600?image=211'},
//  	{from: 'Shana', msg: 'stockholm syndrome', imgLink: 'https://unsplash.it/900/600?image=288'},
//  	{from: 'Jess', msg: 'i love newyork i hate newyork i love newyork', imgLink: 'https://unsplash.it/900/600?image=299'}
// ]
