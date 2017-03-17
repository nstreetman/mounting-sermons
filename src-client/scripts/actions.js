import Backbone from 'backbone'

export const ACTIONS = {
   saveNewSermon: function(uesrFormEntry){
      let newSermonInstance = new SermonModel()
      newSermonInstance.set(uesrFormEntry)
      newSermonInstance.showCampusView().then(function(serverRes){

      })
   },
   fetchAllSermons: function(){
      let sermonCollInstance = new SermonCollection()
      return SermonCollInstance.fetch()
   }
}
