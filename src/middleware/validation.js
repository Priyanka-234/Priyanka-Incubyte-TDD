const validateEmployee = (req, res, next) => {

  const { fullName, jobTitle, country, salary } = req.body;

  if (!fullName || !jobTitle || !country || salary === undefined) {
    return res.status(400).json({
      error: "All fields are required"
    });
  }

  if (salary <= 0) {
    return res.status(400).json({
      error: "Salary must be greater than 0"
    });
  }

  next();
};

module.exports = validateEmployee;