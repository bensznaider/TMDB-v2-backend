const { Favorites } = require("../db/models/index.js");

const addFavorite = async (req, res) => {
  try {
    const favorites = await Favorites.findOrCreate({
      where: {
        tmdbId: req.body.tmdbId,
        type: req.body.type,
        userId: req.body.userId,
      },
      defaults: {
        title: req.body.title,
        type: req.body.type,
        tmdbId: req.body.tmdbId,
        userId: req.body.userId,
        year: req.body.year,
        posterURL: req.body.posterURL,
      },
    });
    res.status(200).send(favorites);
  } catch (error) {
    res.status(404).send(error);
  }
};

const removeFavorite = async (req, res) => {
  try {
    let favorite = req.headers;
    const response = await Favorites.destroy({
      where: {
        title: favorite.title,
        type: favorite.type,
        tmdbId: favorite.tmdbid,
        userId: favorite.userid,
      },
    });
    res.status(200).send(response);
  } catch (error) {
    res.status(404).send(error);
  }
};

const getAllFavorites = async (req, res) => {
  try {
    const favorites = await Favorites.findAll({
      where: { userId: req.params.userId, type: "movie" },
    });
    res.status(200).send(favorites);
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = { addFavorite, removeFavorite, getAllFavorites }
