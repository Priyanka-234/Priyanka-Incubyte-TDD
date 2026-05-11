const Employee = require("../models/employee");
const { fn, col, where } = require("sequelize");
const sequelize = require("../config/database");

exports.countryMetrics = async (req, res) => {

  const result = await Employee.findOne({
    where: where(
      fn("lower", col("country")),
      req.params.country.toLowerCase()
    ),
    attributes: [
      [fn("MIN", col("salary")), "minimum"],
      [fn("MAX", col("salary")), "maximum"],
      [fn("AVG", col("salary")), "average"]
    ],
    raw: true
  });

  if (!result || result.average === null) {
    return res.status(404).json({
      error: "No employees found"
    });
  }

  res.json({
    minimum: Number(result.minimum),
    maximum: Number(result.maximum),
    average: Number(result.average)
  });

};

exports.jobTitleMetrics = async (req, res) => {

  const result = await Employee.findOne({
    where: where(
      fn("lower", col("jobTitle")),
      req.params.jobTitle.toLowerCase()
    ),
    attributes: [
      [fn("AVG", col("salary")), "average"]
    ],
    raw: true
  });

  if (!result || result.average === null) {
    return res.status(404).json({
      error: "No employees found"
    });
  }

  res.json({
    average: Number(result.average)
  });

};