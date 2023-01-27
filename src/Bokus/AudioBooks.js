const mongoose = require("mongoose");

const AudioBooksSchema = new mongoose.Schema({
  author: String,
  title: String,
  time: String,
  readBy: String,
});

module.exports = mongoose.model("AudioBooks", AudioBooksSchema);
