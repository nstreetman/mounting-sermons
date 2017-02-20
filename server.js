//IMPORTS
//import webpack + webpack middleware;
global.chalk = require('chalk')
global.PROJECT_NAME = require('./src-server/config/projectName.js')

if(typeof PROJECT_NAME !== 'string' && process.env === 'development' ){ 
	require('./src-server/cli/setProjectName.js')
	throw new Error(`\n${chalk.bgRed.bold('There must be a project name exported from :')} ${chalk.grey.bold('./src-server/config/projectName.js')} \n ${chalk.bgWhite.black(' you must execute: ')} ${chalk.cyan.bold('npm run set-project-name')}` ) 
}

const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config.js');
const webpackCompiler = webpack(webpackConfig)

const express = require('express') //import express web server
const renderFile = require('ejs').renderFile //import view templating engine 
const connectToDB = require('./src-server/db/db-connect.js') //connect to db

const indexRouter = require('./src-server/routes/indexRouter.js')
const apiRouter = require('./src-server/routes/apiRouter.js')


// =========
// RUN APP
// =========
const app = express()

//configure webpack
app.use(webpackMiddleware(webpackCompiler, {
   noInfo: true,
   publicPath: webpackConfig.output.publicPath
}));


// set port if exists in environment for heroku or live site, else set to 3000 for dev
const PORT = process.env.PORT || 3000
app.set('port', PORT)


//CONFIGURING TEMPLATING ENGINE FOR .HTML
//-----------------------
app.set('views', './dist');
app.engine('html', renderFile)
app.set('view engine', 'html');

// CONFIGURING STATIC FILES  (js, css, images)
// ------------------------------
// js, css, and imafiles from dist/assets/
app.use( express.static( `${__dirname}/dist`) );


// ------------------------------
// Wire up the router
// ------------------------------
app.use('/', indexRouter)
app.use('/api', apiRouter)


//---------------------
//EXECUTION SCRIPTS
//---------------------
//Connect to DB
connectToDB(PROJECT_NAME)

//Tell Server to listen @ port-location
app.listen(PORT, function() {
	console.log(chalk.bold.bgGreen(` App listening on http://localhost:${PORT} `))
})
