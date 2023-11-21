// importing required packages
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./config/mongoose.js");

// import dotenv
require("dotenv").config();

// create app instance
const app = express();

// using body parser to parse over the request body
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// using routes
app.use("/", require("./routes/index"));

// starting the server
app.listen(process.env.PORT, function () {
  console.log(`API is live on http://localhost:${process.env.PORT}/products`);
});
