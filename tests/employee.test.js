const request = require("supertest");
const app = require("../src/app");
const sequelize = require("../src/config/database");
const Employee = require("../src/models/employee");

beforeEach(async () => {
  await sequelize.sync({ force: true });
});

test("should get employee by id", async () => {

  const employee = await request(app)
    .post("/employees")
    .send({
      fullName: "Priyanka HG",
      jobTitle: "DevOps Engineer",
      country: "India",
      salary: 100000
    });

  const response = await request(app)
    .get(`/employees/${employee.body.id}`);

  expect(response.statusCode).toBe(200);

});