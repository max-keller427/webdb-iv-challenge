const db = require("./knexConfig");

module.exports = {
  getDishes, // should return a list of all dishes in the database.
  addDish, //should add the dish to the database and return the id of the new dish.
  getDish, // should return the dish with the provided id and include a list of the related recipes.
  getRecipes,
  getRecipe,
  getRecipesForDish,
  addRecipe // should return a list of all recipes in the database including the dish they belong to.
  //addRecipe // should add a recipe to the database and return the id of the new recipe.
};

function getDishes() {
  return db("dishes");
}

function getRecipesForDish(id) {
  return db("dishes")
    .join("recipes", "recipes.dish_id", "dishes.id")
    .select("recipes.name")
    .where("recipes.dish_id", id);
}

function getRecipes() {
  return db("recipes")
    .join("dishes", "recipes.dish_id", "dishes.id")
    .select("recipes.id", "recipes.name", {
      dish: "dishes.name"
    });
}

//this
function getDish(id) {
  return db("dishes")
    .join("recipes", "recipes.dish_id", "dishes.id")
    .select("dishes.id", "dishes.name", "recipes.dish_id")
    .where({ "recipe.dish_id": id });
}

function addDish(dish) {
  return db("dishes")
    .insert(dish)
    .then(id => {
      return getDish(id[0]);
    });
}

function getRecipe(id) {
  return db("recipes")
    .where({ id })
    .first();
}

//this
function addRecipe(recipe) {
  return db("recipe")
    .insert(recipe)
    .then(id => {
      return getRecipe(id[0]);
    });
}
