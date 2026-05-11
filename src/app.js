const express = require("express");

const employeeRoutes = require("./routes/employeeRoutes");
const salaryRoutes = require("./routes/salaryRoutes");
const metricsRoutes = require("./routes/metricsRoutes");

const app = express();

app.use(express.json());

app.use("/employees", employeeRoutes);
app.use("/employees", salaryRoutes);
app.use("/metrics", metricsRoutes);

module.exports = app;