module.exports = ({ country, salary }) => {

  let tdsPercentage = 0;

  if (country.toLowerCase() === "india") {
    tdsPercentage = 10;
  } else if (country.toLowerCase() === "united states") {
    tdsPercentage = 12;
  }

  const tds = (salary * tdsPercentage) / 100;

  return {
    grossSalary: salary,
    tds,
    netSalary: salary - tds
  };

};