/*const search = async (req, res) => {
  try {
    await 
  } catch (error) {
    res.status(404).send(error);
  } 
};*/

const findById = async (req, res) => {
  try {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${req.params.movieId}?language=en-US`,
      headers: {
        accept: "application/json",
        Authorization:
          process.env.API_KEY,
      },
    };
    const response = await axios.request(options)
    res.send(response.data);
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = { 
  //search,
   findById };
