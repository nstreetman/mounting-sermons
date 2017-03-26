let Router = require('express').Router;
const apiRouter = Router()

/*
 * NOTE: the model for the data-table should not have the name 'SomeModel'
 */
let SermonModel = require('../db/models/sermonModel.js')
let apiController = require('../controllers/apiController.js')(SermonModel)
let {	getMany, getOne, 	createOne,	updateOne, deleteOne} = apiController

apiRouter
 .get('/sermons', getMany)
 .post('/sermons', createOne)
 .get('/sermons/:_id', getOne)
 .put('/sermons/:_id', updateOne)
 .delete('/sermons/:_id', deleteOne)

 // TO DELETE ALL:
 // .delete("/resources/all/records", function(req, res){
 //   SomeModel.remove({}, (err) => {
 //     if(err) return res.json(err)
 //     res.json({
 //       msg: `EVEYTHING successfully deleted`
 //     })
 //   })
 // })

module.exports = apiRouter