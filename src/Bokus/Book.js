const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      require: true,
      minLength: 2,
    },
    genre: {
      enum: ["Sci-Fi", "Fantasy", "Romance", "Historical", "Contemporary"],
    },
    price: {
      type: Number,
      require: true,
    },
    ISBN: {
      type: String,
      unique: true,
    },
    type: {
      enum: ["Pocket", "E-book", "Audiobook", "Hardcover"],
    },
    language: {
      type: String,
      required: true,
    },
    pageNumber: {
      type: Number,
    },

    audioBook: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "AudioBooks",
    },

    eBook: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "EBooks",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Book", BookSchema);
