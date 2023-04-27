const { Router } = require("express");
const router = Router();
const {
  getPokemons,
  createPokemon,
  updatePokemon,
  deletePokemon,
  getPokemon,
} = require("./controllers.js");

router.get("/", async (req, res) => {
  try {
    res.send(await getPokemons());
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    res.send(await getPokemon(id));
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, hp, firstedition, rarity, expansion, type, price, image } =
      req.body;
    await createPokemon(
      name,
      hp,
      firstedition,
      rarity,
      expansion,
      type,
      price,
      image
    );
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.put("/", async (req, res) => {
  try {
    const {
      name,
      hp,
      firstedition,
      rarity,
      expansion,
      type,
      price,
      image,
      id,
    } = req.body;
    await updatePokemon(
      id,
      name,
      hp,
      firstedition,
      rarity,
      expansion,
      type,
      price,
      image
    );
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.delete("/", async (req, res) => {
  try {
    const { id } = req.body;
    await deletePokemon(id);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
