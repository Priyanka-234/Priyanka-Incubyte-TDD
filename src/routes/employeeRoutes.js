const express = require("express");
const router = express.Router();

const controller = require("../controllers/employeeController");
const validateEmployee = require("../middleware/validation");

router.post("/", validateEmployee, controller.createEmployee);

router.get("/", controller.getEmployees);

router.get("/:id", controller.getEmployeeById);

router.put("/:id", validateEmployee, controller.updateEmployee);

router.delete("/:id", controller.deleteEmployee);

module.exports = router;