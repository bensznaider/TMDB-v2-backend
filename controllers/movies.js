const axios = require("axios");
require('dotenv').config();

const movieDetailsById = async (req, res) => {
  try {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${req.params.id}`,
      headers: {
        accept: "application/json",
        Authorization: process.env.API_KEY,
      },
    };
    const response = await axios.request(options);
    res.send(response.data);
  } catch (error) {
    res.status(404).send(error);
  }
};

const topRated = async (req, res) => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/top_rated",
    headers: {
      accept: "application/json",
      Authorization: process.env.API_KEY,
    },
  };
  axios
    .request(options)
    .then((response) => res.send(response.data))
    .catch((err) => console.error(err));
};

const nowPlaying = async (req, res) => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/now_playing",
    headers: {
      accept: "application/json",
      Authorization: process.env.API_KEY,
    },
  };
  axios
    .request(options)
    .then((response) => res.send(response.data))
    .catch((err) => console.error(err));
};

module.exports = {
  movieDetailsById,
  topRated,
  nowPlaying,
};
