const express = require("express");
const router = express.Router();
const { moviesController } = require("../controllers/index.js");

router.get("/top-rated", moviesController.topRated)
router.get("/now-playing", moviesController.nowPlaying)
router.get("/details/:id", moviesController.movieDetailsById);
router.get("/search", moviesController.moviesByString);

module.exports = router;
