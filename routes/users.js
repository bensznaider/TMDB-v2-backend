const express = require("express");
const router = express.Router();
const { usersController } = require("../controllers/index.js");

router.post("/signup", usersController.signup);
router.post("/login", usersController.login);
//router.get("/secret", usersController.secret);
router.post("/me", usersController.me);
router.post("/logout", usersController.logout);

module.exports = router;
