const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/ecommerce")
  .then(() => {
    console.log("Database Conected");
  })
  .catch((e) => {
    console.error(e);
  });
