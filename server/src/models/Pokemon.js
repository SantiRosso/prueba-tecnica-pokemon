const { Schema, model } = require("mongoose");

const pokemonSchema = new Schema({
  name: {
    type: String,
  },
  hp: {
    type: Number,
  },
  firstedition: {
    type: Boolean,
  },
  expansion: {
    type: String,
  },
  type: {
    type: String,
  },
  rarity: {
    type: String,
  },
  price: {
    type: Boolean,
  },
  image: {
    type: String,
  },
  timestamps: true,
});

module.exports = model("Pokemon", pokemonSchema);
