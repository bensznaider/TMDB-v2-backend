const { generateToken } = require("../config/tokens.js");
const { validateAuth } = require("../middlewares/auth.js");
const { Users } = require("../db/models/index.js");

const signup = async (req, res) => {
  try {
    await Users.create(req.body);
    res.sendStatus(200);
  } catch (error) {
    res.status(404).send(error);
  }
};

const login = async (req, res) => {
  try {
    const user = await Users.findOne({
      where: { username: req.body.username },
    });
    if (!user) return res.sendStatus(401);
    const isValid = await user.validatePassword(req.body.password);
    if (!isValid) return res.sendStatus(401);
    const payload = {
      //VERIFICAR SI EL ATRIBUTO DATAVALUES SE LLAMA ASÍ
      id: user.dataValues.id,
      username: user.dataValues.username,
    };
    const token = generateToken(payload);
    localStorage.setItem("token", JSON.stringify(token));
    // res.cookie("Usuario logueado", token);
    res.send(user);
  } catch (error) {
    res.status(404).send(error);
  }
};

const secret = async (req, res) => {
  try {
    await validateAuth(req, res);
    res.send(req.user);
  } catch (error) {
    res.status(404).send(error);
  }
};

const me = async (req, res) => {
  try {
    await validateAuth(req, res);
    res.send(req.user);
  } catch (error) {
    res.status(404).send(error);
  }
};

const logout = (req, res) => {
  localStorage.removeItem("token");
  res.sendStatus(204);
};

module.exports = { signup, login, secret, me, logout };
