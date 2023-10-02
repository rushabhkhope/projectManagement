const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const PORT = process.env.PORT || 5000;
const swagger = require("./swagger");
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

app.use("/api/auth", authRoutes);
swagger(app);
module.exports = app;
