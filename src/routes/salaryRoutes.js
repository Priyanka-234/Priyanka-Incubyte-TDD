const express = require("express");
const router = express.Router();

const controller = require("../controllers/salaryController");

router.get("/:id/salary", controller.getSalaryDetails);

module.exports = router;