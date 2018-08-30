const router = require("express").Router();
const recruitersController = require("../../controllers/recruitersController");

// Matches with "/api/recruiters"
router.route("/recruiters")
  .get(recruitersController.findAll)
  .post(recruitersController.create);

// Matches with "/api/recruiters/:id"
router.route("/recruiters/:id")
  .get(recruitersController.findById)
  .put(recruitersController.update)
  .delete(recruitersController.remove);

module.exports = router;