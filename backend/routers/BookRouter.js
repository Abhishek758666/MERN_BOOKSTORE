const express = require("express");
const router = express.Router();

const { getBooks } = require("../controllers/BookController");

router.route("/").get(getBooks);

module.exports = router;
