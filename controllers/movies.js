const axios = require("axios");
require('dotenv').config();

const movieDetailsById = async (req, res) => {
  try {
    const firstReq = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${req.params.id}`,
      headers: {
        accept: "application/json",
        Authorization: process.env.API_KEY,
      },
    };
    const secondReq = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${req.params.id}/credits`,
      headers: {
        accept: "application/json",
        Authorization: process.env.API_KEY,
      },
    };
    const generalData = await axios.request(firstReq);
    const cast = await axios.request(secondReq);
    const answer = {data: generalData.data, credits: cast.data}
    res.send(answer);
  } catch (error) {
    res.status(404).send(error);
  }
};

const moviesByString = async (req, res) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/search/movie?query=${req.query.movie}&page=${req.query.page}`,
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

const topRated = async (req, res) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/top_rated?page=${req.params.page}`,
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
    url: `https://api.themoviedb.org/3/movie/now_playing?page=${req.params.page}`,
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
  moviesByString,
  topRated,
  nowPlaying,
};
