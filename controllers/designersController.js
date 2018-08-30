const db = require('../models');


// find all designers
module.exports = {
	findAll: function(req, res) {
		db.Designer 
			.find({})
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},

	// Add new designer to db
	create: function(req, res) {
		db.Designer
			.create(req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},

	// Find individual designer by ID
	findById: function(req, res) {
		console.log("Designer Id: " + req.params.id);
		db.Designer
			.find({ "_id": req.params.id })
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
		},

	// Update designer 
	update: function(req, res) {
		console.log("Update Designer");
		console.log(req.body)
		db.Designer
			.findOneAndUpdate({ "_id": req.params.id }, req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},

	// Delete user
	remove: function(req, res) {
		console.log("Delete Designer");
		db.Designer
			.create(req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	}
}

