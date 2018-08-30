var mongoose = require("mongoose");

// Create (save) reference ot schema constructor
var Schema = mongoose.Schema;

// Uses Schema constructor to create new UserSchema object

var DesignerSchema = new Schema({
	// Designers UID - comes from DB.
	userId: {
		type: String,
		//unique: true,
		required: false
	},
	// Designers First Name
	userName: {
		type: String,
		//unique: true,
		required: false
	},
	firstName: {
		type: String,
		required: false
	},
	lastName: {
		type: String,
		required: false
	},
		// Designer email
	email: {
		type: String,
		//unique: true,
		required: false
	},
		// Designer phone number
	phone: {
		type: String,
		required: false
	},
		// Image of designer
		// Description of designers career, etc.
	description: {
		type: String,
		required: false
	},
		// Links to designers online presence
	links: {
		type: Array,
		required: false
	},
		// Where is designer located
	location: {
		type: String,
		required: false
	},
	// List of designers skills
	skills: {
		type: Array,
		required: false
	},
		// What type of designer: visual, UX, UI, etc
	designerType: {
		type: String,
		required: false
	},
	// Desired hourly rate
	hourlyRate: {
		type: Number,
		required: false
	},
		// User Type: Designer
	userType: {
		type: String,
		required: false
	},
		// Availability
	available: {
		type: Boolean,
		required: false
	},
		// has experience managing
	managementExperience: {
		type: Boolean,
		required: false
	},
	// Looking for management job
	seekingManagement: {
		type: Boolean,
		required: false
	},
		// My thoughts about the designer
	designerNotes: {
		type: String,
		unique: false,
		required: false
	},
		// Request for chat sent
	requestSent: {
		type: Number,
		required: false
	},
	// Request for chat received
	requestReceived: {
		type: Number,
		required: false
	},
	chatRequests: {
    type: Number,
		required: false
  },
	// Education History
	education: {
		type: Array,
		required: false
	},
	// Work History
	work: {
		type: Array,
		required: false
	},
	// Designer Acheivements
	achievements: {
		type: Array,
		required: false
	},
	// Rating given by us over a period of time
	rating: {
		type: String,
		required: false
	},
	companyName: {
		type: String,
		required: false
	}
});

// Creates model for schema using Mongoose
var Designer = mongoose.model("Designer", DesignerSchema);

// export User Model
module.exports = Designer; 