const Sequelize = require("sequelize");
const db = require("../index.js");
const bcrypt = require("bcrypt");

class Users extends Sequelize.Model {
  hash(unhashedPass, salt) {
    return bcrypt.hash(unhashedPass, salt);
  };
  validatePassword = function (password) {
    return bcrypt
      .hash(password, this.salt)
      .then((hash) => hash === this.password)
  }
}

Users.init(
  {
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    salt: {
      type: Sequelize.STRING,
    },
  },
  { sequelize: db, modelName: "users" }
);

Users.addHook("beforeCreate", (user) => {
  const salt = bcrypt.genSaltSync(8);
  user.salt = salt;
  return user.hash(user.password, user.salt).then((hash) => {
    user.password = hash;
  });
});

module.exports = Users;
