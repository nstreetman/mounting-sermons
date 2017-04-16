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
    "pastor": "The Rev. Trevor Spencer",
    "series": "Formed in Christ",
    "campus": "Daniel Island",
    "date": "2017-03-13T14:46:25.000Z",
    "ytVideoId": "wIOaKeHvLLg",
    "filestackUrl": "https://cdn.filestackcontent.com/wzKIOaFxTqcG0noLKZSw",
  },
  {
    "pastor": "The Rev. Sean Norris",
    "series": "Generous Hearts",
    "campus": "I'On",
    "date": "2017-02-19T14:46:25.000Z",
    "ytVideoId": "u4DnrwOTO6E",
    "filestackUrl": "https://cdn.filestackcontent.com/HK49wyRSd6GIzRph2b5D",
  },
  {
    "pastor": "The Rev. Chris Warner",
    "series": "none",
    "campus": "Sullivan's Island",
    "date": "2017-03-01T14:46:25.000Z",
    "ytVideoId": "k4kMhn4z9-4",
    "filestackUrl": "https://cdn.filestackcontent.com/fOFtmmzRRKy0XHpAF1ah",
  },
  {
    "pastor": "The Rev. Sean Norris",
    "series": "Formed in Christ",
    "campus": "I'On",
    "date": "2017-03-06T14:46:25.000Z",
    "ytVideoId": "twUvq4aTbu8",
    "filestackUrl": "https://cdn.filestackcontent.com/V2ScnKXhRZaZkrpvtNDk",
  },
  {
    "pastor": "The Rev. Sean Norris",
    "series": "Crazy Busy",
    "campus": "I'On",
    "date": "2017-03-06T14:46:25.000Z",
    "ytVideoId": "a_tbxGZuukQ",
    "filestackUrl": "https://cdn.filestackcontent.com/HK49wyRSd6GIzRph2b5D",
  },
  {
    "pastor": "The Rev. Chris Warner",
    "series": "Crazy Busy",
    "campus": "Daniel Island",
    "date": "2016-12-12T05:00:00.000Z",
    "ytVideoId": "skUR0AyU3SY",
    "filestackUrl": "https://cdn.filestackcontent.com/400pCl5BTLWV26fiWCVl",
  },
  {
    "pastor": "The Rev. Jonathan Bennett",
    "series": "Traveling Light",
    "campus": "Daniel Island",
    "date": "2017-02-05T00:00:00.000Z",
    "ytVideoId": "UFZZL_GEQgk",
    "filestackUrl": "https://cdn.filestackcontent.com/uBVESdtoQJ24SM8cwWtE",
  },
  {
    "pastor": "The Rev. Chris Warner",
    "series": "Christmas 2016",
    "campus": "Sullivan's Island",
    "date": "2016-11-13T00:00:00.000Z",
    "ytVideoId": "_x0XKeXyQvw",
    "filestackUrl": "https://cdn.filestackcontent.com/as1Hq41jQLONzTjBffRf",
  },
  {
    "pastor": "Mr. Zach Miller",
    "series": "Faith at Work",
    "campus": "I'On",
    "date": "2016-12-04T00:00:00.000Z",
    "ytVideoId": "moaankTnfDg",
    "filestackUrl": "https://cdn.filestackcontent.com/2g8hUjF3QlGoXsM7e7bN",
  },
  {
    "pastor": "The Rev. Kate Norris",
    "series": "Follow the Leader",
    "campus": "Daniel Island",
    "date": "2017-02-12T00:00:00.000Z",
    "ytVideoId": "hG4f-RK_4gY",
    "filestackUrl": "https://cdn.filestackcontent.com/tognTbY7SuKw3rqtiLKQ",
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
			console.log('saved: ' + savedRec)

			promisesFulfilled++
			if( promisesFulfilled === seedSet.length) process.exit()
		 })
	})


})
