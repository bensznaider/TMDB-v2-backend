const { Favorites } = require("../db/models/index.js");

const addFavorite = async (req, res) => {
  try {
    const currentFav = await Favorites.findOne({
      where: {
        tmdbId: req.body.tmdbId,
        userId: req.body.userId,
      },
    });
    if (!currentFav) {
      const favorite = await Favorites.create({
        title: req.body.title,
        tmdbId: req.body.tmdbId,
        userId: req.body.userId,
        year: req.body.year,
        posterURL: req.body.posterURL,
        voteAverage: req.body.voteAverage,
      });
      res.status(201).send(favorite);
    } else if (currentFav) {
      res
        .status(409)
        .send("The movie has been already saved as a favorite of this user.");
    }
  } catch (error) {
    res.status(404).send(error);
  }
};

const removeFavorite = async (req, res) => {
  try {
    const currentFav = await Favorites.findOne({
      where: {
        tmdbId: req.body.tmdbId,
        userId: req.body.userId,
      },
    });
    if (currentFav) {
      await currentFav.destroy();
      res.sendStatus(200);
    } else if (!currentFav) {
      res.status(409).send("The movie is not a favorite of this user.");
    }
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
};

const getAllFavorites = async (req, res) => {
  try {
    const favorites = await Favorites.findAll({
      where: { userId: req.params.userId },
    });
    res.status(200).send(favorites);
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = { addFavorite, removeFavorite, getAllFavorites };
