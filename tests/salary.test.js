const request = require("supertest");
const app = require("../src/app");
const sequelize = require("../src/config/database");
const Employee = require("../src/models/employee");

beforeEach(async () => {
  await sequelize.sync({ force: true });
});

test("should calculate salary for united states employee", async () => {

  const employee = await request(app)
    .post("/employees")
    .send({
      fullName: "John Doe",
      jobTitle: "Developer",
      country: "United States",
      salary: 100000
    });

  const response = await request(app)
    .get(`/employees/${employee.body.id}/salary?grossSalary=100000`);

  expect(response.statusCode).toBe(200);
  expect(response.body.tds).toBe(12000);

});

test("should calculate salary for other country with zero deduction", async () => {

  const employee = await request(app)
    .post("/employees")
    .send({
      fullName: "Alex",
      jobTitle: "Developer",
      country: "Canada",
      salary: 100000
    });

  const response = await request(app)
    .get(`/employees/${employee.body.id}/salary?grossSalary=100000`);

  expect(response.statusCode).toBe(200);
  expect(response.body.tds).toBe(0);

});