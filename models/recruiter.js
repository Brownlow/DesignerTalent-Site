var mongoose = require("mongoose");

// Create (save) reference ot schema constructor
var Schema = mongoose.Schema;

// Uses Schema constructor to create new UserSchema object

var RecruiterSchema = new Schema({

	firstName: {
		type: String,
		required: false
	},
	lastName: {
		type: String,
		required: false
	},
		// Recruiter email
	email: {
		type: String,
		//unique: true,
		required: false
	},
		// Recruiter phone number
	phone: {
		type: String,
		required: false
	},
	// Password
	password: {
		type: String,
		required: false
	},
	// Company recruiter works for
	company: {
		type: String,
		required: false
	}
});

// Creates model for schema using Mongoose
var Recruiter = mongoose.model("Recruiter", RecruiterSchema);

// export User Model
module.exports = Recruiter; 