var mongoose = require("mongoose");

// Create (save) reference ot schema constructor
var Schema = mongoose.Schema;

// Uses Schema constructor to create new UserSchema object

var JobSchema = new Schema({

	jobTitle: {
		type: String,
		required: false
  },
  coHiring: {
		type: String,
		required: false
	},
  jobDesc: {
		type: String,
		required: false
  },
  salaryRange: {
    type: String,
		required: false
  },
  chatRequests: {
    type: Number,
		required: false
  }
});

// Creates model for schema using Mongoose
var Job = mongoose.model("Job", JobSchema);

// export User Model
module.exports = Job; 