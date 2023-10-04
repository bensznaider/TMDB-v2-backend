const Sequelize = require("sequelize")

//DATABASE DEPLOYED ON RENDER
const db = new Sequelize("tmdb_kv7s", "tmdb_kv7s_user", "wrtedZ8xylABeJN0RVBC2LexdZqrDGmn", {
  host: "dpg-ckebd6dtj22c73ckjlig-a",
  dialect: "postgres",
  logging: false,
})

//LOCAL DATABASE
/* const db = new Sequelize(DATABASE: "tmdb", USER: null, PASSWORD: null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
}) */

module.exports = db