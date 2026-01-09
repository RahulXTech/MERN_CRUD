const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    bookName: { type: String, required: true },
    bookTitle: { type: String, required: true },
    author: { type: String, required: true },
    sellingPrice: { type: Number, required: true },
    publishDate: { type: Date, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
