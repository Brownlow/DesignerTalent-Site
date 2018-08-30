const router = require("express").Router();
const companiesController = require("../../controllers/companiesController");

// Matches with "/api/companies"
router.route("/companies")
  .get(companiesController.findAll)
  .post(companiesController.create);

// Matches with "/api/companies/:id"
router.route("/companies/:id")
  .get(companiesController.findById)
  .put(companiesController.update)
  .delete(companiesController.remove);

module.exports = router;