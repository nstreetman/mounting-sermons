let Router = require('express').Router;
const apiRouter = Router()

/*
 * NOTE: the model for the data-table should not have the name 'SomeModel'
 */
let ExampleModel = require('../db/models/exampleModel.js')
let apiController = require('../controllers/apiController.js')(ExampleModel)
let {	getMany, getOne, 	createOne,	updateOne, deleteOne} = apiController

apiRouter
 .get('/item', getMany)
 .post('/item', createOne)
 .get('/item/:_id', getOne)
 .put('/item/:_id', updateOne)
 .delete('/item/:_id', deleteOne)

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