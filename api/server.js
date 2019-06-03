const express = require("express");
const helmet = require("helmet");

const server = express();
const db = require("../data/model");

server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ Lets: "COOOOK" });
});

server.get("/dishes", async (req, res) => {
  try {
    const dishes = await db.getDishes();
    res.status(200).json(dishes);
  } catch (err) {
    res.status(500).json({ message: "error retrieving dishes" });
  }
});

server.get("/dishes/:id", async (req, res) => {
  try {
    const dish = await db.getDish(req.params.id);
    // const recipes = await db.getRecipes(req.params.id);
    res.status(200).json(dish);
  } catch (err) {
    res.status(500).json({ message: "could not get dish" });
  }
});

server.get("/dishes/:id/recipes", async (req, res) => {
  try {
    const dish = await db.getRecipesForDish(req.params.id);
    res.status(200).json(dish);
  } catch (err) {
    res.status(500).json({ message: "couldnt get recipes" });
  }
});

server.get("/recipes", async (req, res) => {
  try {
    const recipes = await db.getRecipes();
    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json(err);
  }
});

server.get("/recipes/:id", async (req, res) => {
  try {
    const recipe = await db.getRecipe(req.params.id);
    res.status(200).json(recipe);
  } catch (err) {
    res.status(500).json({ message: "Couldnt get recipe" });
  }
});

server.post("/dishes", async (req, res) => {
  try {
    const dish = await db.addDish(req.body);
    res.status(200).json(dish.id);
  } catch (err) {
    res.status(500).json(err);
  }
});

server.post("/recipes", async (req, res) => {
  try {
    const recipe = await db.addRecipe(req.body);
    res.status(200).json(recipe);
  } catch (err) {
    res.status(500).json({ message: "couldnt add recipe" });
  }
});

module.exports = server;
