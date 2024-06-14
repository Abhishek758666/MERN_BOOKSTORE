const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
  coverImageUrl: {
    type: String,
  },
  price: {
    type: Number,
  },
  category: {
    type: String,
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
