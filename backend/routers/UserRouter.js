const express = require("express");
const { signUpUser, loginUser } = require("../controllers/UserController");
const router = express.Router();

router.route("/signup").post(signUpUser);
router.route("/login").post(loginUser);

module.exports = router;
