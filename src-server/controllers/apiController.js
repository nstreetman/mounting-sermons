function apiController(SomeModel){

	function getMany(req, res){
	  SomeModel.find(req.query , function(err, results){
		 if(err) return res.send(err).status(500)
		 res.json(results)
	  })
	}

	function createOne(req, res){
		 let newRecord = new SomeModel(req.body)

		 newRecord.save(function(err, record){
			 if(err) return res.status(500).send(err)
			 let objCopy = newRecord.toObject()
			 delete objCopy.password
			 res.json(objCopy)
		 })
	}

	function getOne(req, res){
	  SomeModel.findById(req.params._id, "-password", function(err, record){
		 if(err || !record ) return res.json(err)
		 res.json(record)
	  })
	}

	function updateOne(req, res){
	  SomeModel.findByIdAndUpdate(req.params._id, req.body, function(err, record){
			if (err) {
			  res.status(500).send(err)
			}
			else if (!record) {
			  res.status(400).send('no record found with that id')
			}
			else {
			  res.json(Object.assign({},req.body,record))
			}
	  })
	}

	function deleteOne(req, res){
	  SomeModel.remove({ _id: req.params._id}, (err) => {
		 if(err) return res.json(err)
		 res.json({
			msg: `record ${req.params._id} successfully deleted`,
			_id: req.params._id
		 })
	  })
	}

	return {
		getMany,
		getOne,
		createOne,
		updateOne,
		deleteOne
	}
}

module.exports = apiController
