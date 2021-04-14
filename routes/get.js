const path = require("path");
const Router = require("express").Router();
const Books = require("../models/book.js");
// const apiRoutes = require("./api");

// API Routes
// router.use("/api", apiRoutes);

// If no API routes are hit, send the React app

Router.get("/api/books", async (req, res) => {
  Books.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(200).json(err);
    });
});

module.exports = Router;
