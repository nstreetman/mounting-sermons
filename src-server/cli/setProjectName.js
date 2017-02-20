const prompt = require('prompt');
const chalk = require('chalk');
const fs = require('fs')
prompt.message = ""
prompt.delimiter = chalk.cyan(" >")
let writeDestination = 	`${__dirname}/../config/projectName.js`

let schema = [{
  name: 'projectName',
  pattern: /^[a-zA-Z_-]+$/,
  message: 'Name must be only letters, spaces, or dashes',
  required: true
}];



console.log(chalk.cyan('What is the project name?'))

prompt.start()

prompt.get(schema, function (err, result) {
 //
 // Log the results.
 console.log('Command-line input received:');
 console.log(' projectName: ' + result.projectName);
 console.log(` writing to ${chalk.grey(writeDestination)}`);

 fs.writeFileSync(
	 writeDestination, 
	`module.exports = '${result.projectName}'`,
	'utf-8'
 )
});	
