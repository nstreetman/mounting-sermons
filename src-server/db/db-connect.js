const mongoose = require('mongoose')
const chalk = require('chalk')

function establishDbConnection (dbUrl){
	return new Promise(function(resolve, reject){
		mongoose.connect(dbUrl , (err, db)=>{
		  if (err) { reject(err) } 
			else { resolve(dbUrl)  }
		})
	})
}

function connectToDB(projectName, cb){
      console.log('running db-setup')
      let dbLocation = `mongodb://localhost/${projectName}_dev`
      if (process.env.NODE_ENV !== "development") dbLocation = process.env.MONGODB_URI
		  
      establishDbConnection(dbLocation)
			.then( (x) => {
				console.log(chalk.green(`----  connected to ${x}`))
 				if (typeof cb === 'function') cb()
			})
			.catch( (x) => {console.log(chalk.red(`db connection error: `, x)) })
}

module.exports = connectToDB
