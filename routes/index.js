const path = require("path");
const router = require("express").Router();
const designerRoutes = require("./api/designers.js");
const recruiterRoutes = require("./api/recruiters.js");
const companyRoutes = require("./api/companies.js");
const jobRoutes = require("./api/jobs.js");



// API Routes
router.use("/api", designerRoutes);
router.use("/api", recruiterRoutes);
router.use("/api", companyRoutes);
router.use("/api", jobRoutes);





//If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
