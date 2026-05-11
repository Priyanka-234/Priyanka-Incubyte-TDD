const Employee = require("../models/employee");
const calculateSalary = require("../services/salaryService");

exports.getSalaryDetails = async (req, res) => {

  const employee = await Employee.findByPk(req.params.id);

  if (!employee) {
    return res.status(404).json({
      error: "Employee not found"
    });
  }

  const grossSalary = Number(req.query.grossSalary);

  if (!grossSalary) {
    return res.status(400).json({
      error: "grossSalary query parameter is required"
    });
  }

  if (grossSalary <= 0) {
    return res.status(400).json({
      error: "grossSalary must be greater than 0"
    });
  }

  const salary = calculateSalary({
    country: employee.country,
    salary: grossSalary
  });

  res.json(salary);

};