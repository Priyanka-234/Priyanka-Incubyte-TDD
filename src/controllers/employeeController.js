const Employee = require("../models/employee");

exports.createEmployee = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getEmployees = async (req, res) => {
  const employees = await Employee.findAll();
  res.json(employees);
};

exports.getEmployeeById = async (req, res) => {
  const employee = await Employee.findByPk(req.params.id);

  if (!employee) {
    return res.status(404).json({ error: "Employee not found" });
  }

  res.json(employee);
};

exports.updateEmployee = async (req, res) => {
  const employee = await Employee.findByPk(req.params.id);

  if (!employee) {
    return res.status(404).json({ error: "Employee not found" });
  }

  await employee.update(req.body);

  res.json(employee);
};

exports.deleteEmployee = async (req, res) => {
  const employee = await Employee.findByPk(req.params.id);

  if (!employee) {
    return res.status(404).json({ error: "Employee not found" });
  }

  await employee.destroy();

  res.json({
    message: "Employee deleted successfully"
  });
};