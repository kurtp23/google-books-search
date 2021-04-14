const { error } = require("console");
const path = require("path");
const Router = require("express").Router();
const Books = require("../models/book.js");
// const apiRoutes = require("./api");

// API Routes
// router.use("/api", apiRoutes);

// If no API routes are hit, send the React app

Router.delete("/api/books/:id", async (req, res) => {
  Books.remove({ id: req.params.id })
    .then((data) => {
      console.log("this is data", data);
    })
    .catch((err) => {
      console.log(err);
      res.status(200).json(err);
    });
});

module.exports = Router;
