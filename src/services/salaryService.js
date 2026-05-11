const calculateSalary = (employee) => {

  let tds = 0;

  if (employee.country.toLowerCase() === "india") {
    tds = employee.salary * 0.10;
  } else if (employee.country.toLowerCase() === "united states") {
    tds = employee.salary * 0.12;
  }

  return {
    grossSalary: employee.salary,
    tds,
    netSalary: employee.salary - tds
  };
};

module.exports = calculateSalary;