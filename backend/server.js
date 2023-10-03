const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const projectRoutes = require("./routes/projectRoutes");
const PORT = process.env.PORT || 5000;
const swagger = require("./swagger");
const authMiddleware = require("./middleware/authMiddleware"); // Adjust the path as needed

require("dotenv").config();

app.use(express.json());
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  mongoose
    .connect(
      "mongodb://0.0.0.0:27017/pms?readPreference=primary&directConnection=true&ssl=false"
    )
    .then((data) => {
      console.log("mongodb connected");
    })
    .catch((err) => {
      console.log(err);
    });
});
app.use((req, res, next) => {
  // Exclude login and register routes from authentication
  if (req.path === "/api/login" || req.path === "/api/register") {
    next();
  } else {
    authMiddleware(req, res, next);
  }
});
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);

swagger(app);
module.exports = app;
