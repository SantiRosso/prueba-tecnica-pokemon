const { Router } = require("express");
const router = Router();
const { getPokemons, createPokemon } = require("./controllers.js");

router.get("/", async (req, res) => {
  try {
    res.send(await getPokemons());
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/", async (req, res) => {
  const { name } = req.body;
  try {
    await createPokemon(name);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
