const db = require('../models');


// find all recruiters
module.exports = {
	findAll: function(req, res) {
		db.Recruiter 
			.find({})
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},

	// Add new recruiter to db
	create: function(req, res) {
		db.Recruiter
			.create(req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},

	// Find individual recruiter by ID
	findById: function(req, res) {
		// console.log("Find Recruiter by User-Id");
		// console.log("userId: " + req.params.id);
		db.Recruiter
			.find({ "userId": req.params.id })
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
		},

	// update recruiter
	update: function(req, res) {
		console.log("Update Recruiter");
		db.Recruiter
			.findOneAndUpdate({ "userId": req.params.id }, req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},

	// Delete recruiter
	remove: function(req, res) {
		console.log("Delete Recruiter");
		db.Recruiter
			.create(req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	}
}

