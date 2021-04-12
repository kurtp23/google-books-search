var mongoose = require("mongoose");
var db = require("../models/");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooksreact", {
  useNewUrlParser: true,
});

var userSeed = [
  {
    image: "kurt Phillips",

    title: "kurt@phillips",

    author: "1233wwedx",

    id: "1234",
    description: "awdsza",
  },
];

db.Books.collection
  .insertMany(userSeed)
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
