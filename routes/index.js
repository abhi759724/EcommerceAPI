const express = require("express");
const router = express.Router();

const homeController = require("../controllers/home_controller");

router.get("/", homeController.homepage);
router.use("/products", require("./products"));

module.exports = router;
