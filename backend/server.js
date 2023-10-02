const express = require("express");
const app = express();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

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
