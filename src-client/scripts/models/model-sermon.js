import Backbone from 'backbone'

export const SermonModel = Backbone.model.extend({
   urlRoot: 'api/sermons',
   idAttribute: '_id'
})

export const SermonCollection = Backbone.Collection.extend({
   model: SermonModel,
   url: '/api/sermons'
})
