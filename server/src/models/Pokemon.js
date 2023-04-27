const { Schema, model } = require("mongoose");

const pokemonSchema = new Schema(
  {
    name: String,
    hp: Number,
    firstedition: Boolean,
    expansion: String,
    type: Array,
    rarity: String,
    price: Number,
    image: String,
  },
  {
    timestamps: {
      createdAt: "created_at", // Use `created_at` to store the created date
      updatedAt: "updated_at", // and `updated_at` to store the last updated date
    },
  }
);

module.exports = model("Pokemon", pokemonSchema);
