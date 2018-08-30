var mongoose = require("mongoose");

// Create (save) reference ot schema constructor
var Schema = mongoose.Schema;

// Uses Schema constructor to create new UserSchema object

var CompanySchema = new Schema({

  // Company Name
	company: {
		type: String,
		required: false
	},
	numUsers: {
		type: String,
		required: false
	},
	
	// Company Type - Industry
	companyType: {
		type: String,
		required: false
	},
		// My thoughts about the designer
	companyNotes: {
		type: String,
	},
	// Rating given by us over a period of time
	rating: {
		type: String,
		required: false
	}
});

// Creates model for schema using Mongoose
var Company = mongoose.model("Company", CompanySchema);

// export User Model
module.exports = Company; 