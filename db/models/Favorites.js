const Sequelize = require("sequelize")
const db = require("../index.js")

class Favorites extends Sequelize.Model {}

Favorites.init(
  {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    tmdbId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    year: {
      type: Sequelize.INTEGER,
    },
    posterURL: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "favorites" }
);

module.exports = Favorites;