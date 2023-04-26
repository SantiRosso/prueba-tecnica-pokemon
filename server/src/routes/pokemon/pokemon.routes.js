const { Router } = require("express");
const router = Router();
const {
  getPokemons,
  createPokemon,
  updatePokemon,
} = require("./controllers.js");

router.get("/", async (req, res) => {
  try {
    res.send(await getPokemons());
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    await createPokemon(name);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.put("/", async (req, res) => {
  try {
    const { name, id } = req.body;
    await updatePokemon(id, name);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
