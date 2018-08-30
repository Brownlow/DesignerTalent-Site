const db = require('../models');


// find all Jobs
module.exports = {
	findAll: function(req, res) {
		db.Job
			.find({})
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},

	// Add new Job to db
	create: function(req, res) {
		db.Job
			.create(req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},

	// Find individual Job by ID
	findById: function(req, res) {
		console.log("userId: " + req.params.id);
		db.Job
			.find({ "_id": req.params.id })
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
		},

	// update Job
	update: function(req, res) {
		console.log("Update Job");
		db.Job
			.findOneAndUpdate({ "_id": req.params.id }, req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},

	// Delete Job
	remove: function(req, res) {
		console.log("Delete Job");
		db.Job
			.create(req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	}
}

