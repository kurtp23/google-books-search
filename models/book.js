const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  image: { type: String },
  title: { type: String, required: true },
  author: [{ type: String }],
  description: { type: String },
  id: { type: String, required: true },
});

const Books = mongoose.model("Book", bookSchema);

module.exports = Books;
