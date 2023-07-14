const express = require("express");
const router = express.Router();
const { moviesController } = require("../controllers/index.js");

//router.get("/search", moviesController.search);
router.get("/:id", moviesController.findById);

module.exports = router;