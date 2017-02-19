//IMPORTS
//import webpack + webpack middleware;
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config.js');
const webpackCompiler = webpack(config)

const express = require('express') //import express web server
const renderFile = require('ejs').renderFile //import view templating engine 
const connectToDB = require('./src-server/db/db-connect.js') //connect to db

const indexRouter = require('./src-server/routes/indexRouter.js')

// =========
// RUN APP
// =========
const app = express()

//configure webpack
app.use(webpackMiddleware(webpackCompiler, {
   noInfo: true,
   publicPath: config.output.publicPath
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

//handle GET requests to `/` (root)
app.use('/', indexRouter)

//Set the port location

//---------------------
//EXECUTION SCRIPTS
//---------------------
//Connect to DB
connectToDB('some-project')

//Tell Server to listen @ port-location
app.listen(PORT, function() {
	console.log('\n\n===== listening for requests on port ' + PORT + ' =====\n\n')
})
