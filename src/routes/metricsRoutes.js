const express = require("express");
const router = express.Router();

const controller = require("../controllers/metricsController");

router.get("/country/:country", controller.countryMetrics);

router.get("/job-title/:jobTitle", controller.jobTitleMetrics);

module.exports = router;