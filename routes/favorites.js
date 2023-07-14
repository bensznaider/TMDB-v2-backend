const express = require("express");
const router = express.Router();
const { favoritesController } = require("../controllers/index.js");

router.post("/add-favorite", favoritesController.addFavorite);
router.delete("/remove-favorite", favoritesController.removeFavorite);
router.get("/:userId/favorites", favoritesController.getAllFavorites);

module.exports = router;