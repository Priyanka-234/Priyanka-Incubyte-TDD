# Salary Management Kata

Backend API application for managing employees, salary calculations, and salary metrics.

---

# Tech Stack

- Node.js
- Express.js
- SQLite
- Sequelize ORM
- Jest
- Supertest

---

# Install Dependencies

```bash
npm install
```

---

# Run Application

```bash
npm run dev
```

Server runs on:

```bash
http://localhost:3000
```

---

# Run Tests

```bash
npm test
```

---

# Features Implemented

## Employee CRUD APIs

- Create employee
- Get all employees
- Get employee by ID
- Update employee
- Delete employee

## Salary Calculation API

Salary deduction rules:

- India → 10% TDS
- United States → 12% TDS
- Other countries → No deduction

Supports dynamic gross salary input:

```bash
GET /employees/:id/salary?grossSalary=120000
```

## Salary Metrics APIs

- Minimum salary by country
- Maximum salary by country
- Average salary by country
- Average salary by job title

Includes:
- Database aggregation using Sequelize functions
- Case-insensitive filtering

---

# Validation

- Required field validation
- Negative salary validation
- Gross salary query validation

---

# Testing

Implemented tests for:

- Employee CRUD operations
- Salary calculations
- Validation edge cases
- Metrics APIs
- 404 scenarios
- Database isolation between tests

Tests are isolated using:

```js
beforeEach(async () => {
  await sequelize.sync({ force: true });
});
```

---

# TDD Approach

This project follows Test-Driven Development (TDD):

1. Write failing tests
2. Implement minimal code
3. Refactor implementation

Commit history reflects:
- test commits
- implementation commits
- refactor commits

---

# Implementation Details

## AI Usage

AI tools used during development:

- ChatGPT

### Areas where AI was used

- Project structure planning
- API design guidance
- Sequelize query optimization
- Test case suggestions
- TDD workflow guidance
- Edge case identification
- README improvements

### Example prompts used

- "Generate Express.js CRUD API structure with Sequelize"
- "How to implement salary deduction logic based on country"
- "How to isolate Jest tests using SQLite and Sequelize"
- "How to optimize Sequelize aggregation queries"

### Rationale

AI was used to accelerate scaffolding, improve test coverage ideas, validate implementation approaches, and assist with refactoring decisions while maintaining manual debugging, verification, and implementation ownership throughout development.

---

# API Endpoints

## Employee APIs

| Method | Endpoint | Description |
|---|---|---|
| POST | /employees | Create employee |
| GET | /employees | Get all employees |
| GET | /employees/:id | Get employee by ID |
| PUT | /employees/:id | Update employee |
| DELETE | /employees/:id | Delete employee |

## Salary API

| Method | Endpoint | Description |
|---|---|---|
| GET | /employees/:id/salary?grossSalary=120000 | Calculate salary |

## Metrics APIs

| Method | Endpoint | Description |
|---|---|---|
| GET | /metrics/country/:country | Salary metrics by country |
| GET | /metrics/job-title/:jobTitle | Average salary by job title |