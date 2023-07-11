const Sequelize = require("sequelize")

const db = new Sequelize("tmdb", null, null, {
  //host and dialect: UPDATE ACCORDING TO DEPLOY REQUIREMENTS
  host: "localhost",
  dialect: "postgres",
  logging: false,
})

module.exports = db