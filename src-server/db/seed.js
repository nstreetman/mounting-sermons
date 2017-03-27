const mongoose = require( 'mongoose');
const connectToDB = require('./db-connect.js')
const PROJECT_NAME = require('../config/projectName.js')
const axios = require('axios')

const SomeModel = require('./models/sermonModel.js');
const UserModel = require('./models/userModel.js')

if(typeof PROJECT_NAME !== 'string' ){ 
	require('./src-server/cli/setProjectName.js')
	throw new Error(`\n${chalk.bgRed.bold('There must be a project name exported from :')} ${chalk.grey.bold('./src-server/config/projectName.js')} \n ${chalk.bgWhite.black(' you must execute: ')} ${chalk.cyan.bold('npm run set-project-name')}` ) 
}

let seedSet = [
	{
		"pastor" : "Trevor Spencer",
		"series"  : "Formed in Christ",
		"campus" : "Daniel Island",
		"date" : "Sun Mar 13 2017 10:46:25 GMT-0400 (EDT)",
		"ytVideoId" : "wIOaKeHvLLg",
		"filestackUrl" : "https://cdn.filestackcontent.com/wzKIOaFxTqcG0noLKZSw"
	},
   {
	   "pastor" : "Sean Norris",
	   "series"  : "Crazy Busy",
	   "campus" : "I'On",
	   "date" : "Sun Mar 6 2017 10:46:25 GMT-0400 (EDT)",
	   "ytVideoId" : "a_tbxGZuukQ",
	   "filestackUrl" : "https://cdn.filestackcontent.com/HK49wyRSd6GIzRph2b5D"
	},
	{
	   "pastor" : "Chris Warner",
	   "series"  : "none",
	   "campus" : "Sullivan's Island",
	   "date" : "Fri Mar 1 2017 10:46:25 GMT-0400 (EDT)",
	   "ytVideoId" : "k4kMhn4z9-4",
	   "filestackUrl" : "https://cdn.filestackcontent.com/fOFtmmzRRKy0XHpAF1ah"
   },
   {
	   "pastor" : "Sean Norris",
	   "series"  : "Formed in Christ",
	   "campus" : "I'On",
	   "date" : "Sun Mar 6 2017 10:46:25 GMT-0400 (EDT)",
	   "ytVideoId" : "twUvq4aTbu8",
	   "filestackUrl" : "https://cdn.filestackcontent.com/V2ScnKXhRZaZkrpvtNDk"
	},
	{
	 "pastor" : "Sean Norris",
	 "series"  : "Crazy Busy",
	 "campus" : "I'On",
	 "date" : "Sun Mar 6 2017 10:46:25 GMT-0400 (EDT)",
	 "ytVideoId" : "a_tbxGZuukQ",
	 "filestackUrl" : "https://cdn.filestackcontent.com/HK49wyRSd6GIzRph2b5D"
	}
]



connectToDB(PROJECT_NAME, (err, result)=>{
	let promisesFulfilled = 0
	seedSet.forEach((dataRecord)=>{
		//   SEED ACTION ON EACH RECORD HERE
		// 	dataRecord.sold = false 
      let record = new SomeModel(dataRecord)
		record.save((err, savedRecord)=>{
			if (err) console.log(err)
			console.log('saved: ' + savedRecord._id )
			
			promisesFulfilled++
			if( promisesFulfilled === seedSet.length) process.exit()
		 }) 
	})

	
})