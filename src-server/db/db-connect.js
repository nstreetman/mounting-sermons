const mongoose = require('mongoose')

function establishDbConnection (dbUrl){
	return new Promise(function(resolve, reject){
		mongoose.connect(dbUrl , (err, db)=>{
		  if (err) { reject(err) } 
			else { resolve(dbUrl)  }
		})
	})
}

function connectToDB(projectName){
      console.log('running db-setup')
      let dbLocation = `mongodb://localhost/${projectName}_dev`
      if (process.env.NODE_ENV !== "development") dbLocation = process.env.MONGODB_URI
		  
      establishDbConnection(dbLocation)
			.then( (x) => {console.log(`----  connected to ${x} ----`) })
			.catch( (x) => {console.log(`db connection error: `, x)})
}

module.exports = connectToDB
