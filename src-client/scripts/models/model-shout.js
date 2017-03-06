import Backbone from 'backbone'


export const ShoutModel = Backbone.Model.extend({
	urlRoot: '/api/shouts',
	idAttribute: '_id'
})

export const ShoutCollection = Backbone.Collection.extend({
	model: ShoutModel,
	url: '/api/shouts'
})