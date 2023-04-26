const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  name: {
    type: String,
  },
});

module.exports = model("Product", productSchema);
