const router = require("express").Router();
const designersController = require("../../controllers/designersController");

// Matches with "/api/designers"
router.route("/designers")
  .get(designersController.findAll)
  .post(designersController.create);

// Matches with "/api/designers/:id"
router.route("/designers/:id")
  .get(designersController.findById)
  .put(designersController.update)
  .delete(designersController.remove);

module.exports = router;