const mongoose = require("mongoose");

// import env
require("dotenv").config();

// connecting mongoose to its default server and ecommerceDB
mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

db.once("open", function () {
  console.log("Connected to Database :: MongoDB");
});

module.exports = db;
