require("dotenv").config();

const app = require("./app");
const sequelize = require("./config/database");

require("./models/employee");

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});