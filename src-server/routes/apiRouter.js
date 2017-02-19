const Router = require('express').Router
const axios = require('axios')

const indexRouter = Router()

indexRouter.get('/', (req, res)=> {res.render('index') })
