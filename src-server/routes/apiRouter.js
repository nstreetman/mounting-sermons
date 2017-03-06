let Router = require('express').Router;
const apiRouter = Router()

/*
 * NOTE: the model for the data-table should not have the name 'SomeModel'
 */
let ExampleModel = require('../db/models/exampleModel.js')
let apiController = require('../controllers/apiController.js')(ExampleModel)
let {} = apiController

apiRouter
 .get('/some-model', )
 .post('/some-model', )
 .get('/some-model/:_id', )
 .put('/some-model/:_id', )

 .delete('/some-model/:_id', )

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