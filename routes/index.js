const path = require("path");
const Router = require("express").Router();
const Books = require("../models/book.js");
// const apiRoutes = require("./api");

// API Routes
// router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
Router.post("/api/addBook", async (req, res) => {
  console.log(req.body);
  const book = new Books(req.body);
  Books.create(book)
    .then((dbBook) => {
      res.json(dbBook);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = Router;
