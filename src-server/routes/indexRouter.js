const Router = require('express').Router;
const axios = require('axios');
const {getIndex, makeProxyRequest} = require('../controllers/indexController');

const indexRouter = Router();

indexRouter.get('/', getIndex )

indexRouter.get('/proxy', makeProxyRequest )

module.exports = indexRouter