const Book = require("../models/BookModel");

const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({ books });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getBooks };
