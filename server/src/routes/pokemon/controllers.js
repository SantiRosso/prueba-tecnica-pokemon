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

const updatePokemon = async (id, name) => {
  try {
    await Pokemon.updateOne({ _id: id }, { name: name });
  } catch (error) {
    throw new Error(error);
  }
};

const deletePokemon = async (id) => {
  try {
    await Pokemon.deleteOne({ _id: id });
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { getPokemons, createPokemon, updatePokemon, deletePokemon };
