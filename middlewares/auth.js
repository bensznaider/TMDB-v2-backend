const { validateToken } = require("../config/tokens");

function validateAuth(req, res, next) {
  const token = JSON.parse(localStorage.getItem("token"));
  if (!token) return res.sendStatus(401);
  const { user } = validateToken(token);
  if (!user) return res.sendStatus(401);
  req.user = user;
  next();
}

module.exports = { validateAuth };
