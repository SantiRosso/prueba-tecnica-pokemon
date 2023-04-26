const Pokemon = require("../../models/Pokemon.js");

const getPokemons = async () => {
  try {
    const pokemons = await Pokemon.find();
    return pokemons;
  } catch (error) {
    throw new Error(error);
  }
};

const createPokemon = async (name) => {
  try {
    const pokemon = new Pokemon({
      name: name,
    });
    await pokemon.save();
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { getPokemons, createPokemon };
