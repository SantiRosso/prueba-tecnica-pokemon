const mongoose = require("mongoose");
const app = require("../src/app.js");
const nodemon = require("nodemon");
require("dotenv").config();
const { DB_HOST, DB_NAME } = process.env;

(async () => {
  mongoose.set("strictQuery", false);
  const db = await mongoose.connect(`mongodb://${DB_HOST}/${DB_NAME}`);
  console.log(`Connection stablished to DB: ${db.connection.name}`);
})();

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("mongoDB connection stablished");
});

connection.on("error", (error) => {
  console.log(error);
  process.exit(0);
});
