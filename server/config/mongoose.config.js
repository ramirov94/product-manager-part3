const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/productdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection to database is successful"))
  .catch((err) => console.log("There was an error with the connection", err));
