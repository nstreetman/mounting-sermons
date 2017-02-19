const axios = require('axios');

function getIndex (req, res){
	res.render('index') 
}
 
function makeProxyRequest(req, res) {
	axios.get(`${req.query.api}`).then((serverRes)=>{
		return res.json(serverRes.data).status(200)
	})	
}


module.exports = {
	getIndex,
	makeProxyRequest
}