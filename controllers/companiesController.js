const db = require('../models');


// find all companies
module.exports = {
	findAll: function(req, res) {
		db.Company 
			.find({})
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},

	// Add new company to db
	create: function(req, res) {
		db.Company
			.create(req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},

	// Find individual company by ID
	findById: function(req, res) {
		// console.log("Find Recruiter by User-Id");
		 console.log("userId: " + req.params.id);
		db.Company
			.find({ "userId": req.params.id })
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
		},

	// update company
	update: function(req, res) {
		console.log("Update Company");
		db.Company
			.findOneAndUpdate({ "userId": req.params.id }, req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},

	// Delete company
	remove: function(req, res) {
		console.log("Delete Company");
		db.Company
			.create(req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	}
}

