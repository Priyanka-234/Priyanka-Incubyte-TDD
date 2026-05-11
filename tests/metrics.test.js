const request = require("supertest");
const app = require("../src/app");
const sequelize = require("../src/config/database");
const Employee = require("../src/models/employee");

beforeEach(async () => {
  await sequelize.sync({ force: true });
});

test("should fetch job title metrics", async () => {

  await request(app)
    .post("/employees")
    .send({
      fullName: "Priyanka HG",
      jobTitle: "DevOps Engineer",
      country: "India",
      salary: 100000
    });

  const response = await request(app)
    .get("/metrics/job-title/DevOps Engineer");

  expect(response.statusCode).toBe(200);

});