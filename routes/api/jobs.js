const router = require("express").Router();
const jobsController = require("../../controllers/jobsController");

// Matches with "/api/jobs"
router.route("/jobs")
  .get(jobsController.findAll)
  .post(jobsController.create);

// Matches with "/api/jobs/:id"
router.route("/jobs/:id")
  .get(jobsController.findById)
  .put(jobsController.update)
  .delete(jobsController.remove);

module.exports = router;