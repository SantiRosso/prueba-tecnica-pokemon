const Pokemon = require("../../models/Pokemon.js");

const getPokemons = async () => {
  try {
    const pokemons = await Pokemon.find();
    return pokemons;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { getPokemons };
