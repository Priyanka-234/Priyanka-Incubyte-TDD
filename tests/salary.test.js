const request = require("supertest");
const app = require("../src/app");

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

});