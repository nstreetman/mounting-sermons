const Router = require('express').Router
const axios = require('axios')

const apiRouter = Router()

apiRouter.get('/', (req, res)=> { 
	res.json(res).status(200) 
})

module.exports = apiRouter