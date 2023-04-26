const { Schema, model } = require("mongoose");

const pokemonSchema = new Schema({
  name: {
    type: String,
  },
});

module.exports = model("Pokemon", pokemonSchema);
