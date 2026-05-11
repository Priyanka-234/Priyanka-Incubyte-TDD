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

test("should return 404 when updating non existing employee", async () => {

  const response = await request(app)
    .put("/employees/999")
    .send({
      fullName: "Test",
      jobTitle: "Developer",
      country: "India",
      salary: 10000
    });

  expect(response.statusCode).toBe(404);

});

test("should return 404 when deleting non existing employee", async () => {

  const response = await request(app)
    .delete("/employees/999");

  expect(response.statusCode).toBe(404);

});

test("should fail for missing required fields", async () => {

  const response = await request(app)
    .post("/employees")
    .send({
      fullName: "Priyanka"
    });

  expect(response.statusCode).toBe(400);

});