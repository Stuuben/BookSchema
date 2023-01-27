const mongoose = require("mongoose");

const EBooksSchema = new mongoose.Schema({
  author: String,
  name: String,
  pages: Number,
});

module.exports = mongoose.model("EBooks", EBooksSchema);
