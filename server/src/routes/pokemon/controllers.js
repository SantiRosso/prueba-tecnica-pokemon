const Pokemon = require("../../models/Pokemon.js");

const getPokemons = async () => {
  try {
    const pokemons = await Pokemon.find();
    return pokemons;
  } catch (error) {
    throw new Error(error);
  }
};

const getPokemon = async (id) => {
  try {
    const pokemon = await Pokemon.findById(id);
    return pokemon;
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
    await Pokemon.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  getPokemons,
  getPokemon,
  createPokemon,
  updatePokemon,
  deletePokemon,
};
