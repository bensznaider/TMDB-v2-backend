const express = require("express");
const router = express.Router();
const users = require("./users.js");
const movies = require("./movies.js");
const favorites = require("./favorites.js");

router.use("/users", users);
router.use("/movies", movies);
router.use("/favorites", favorites);

module.exports = router;
