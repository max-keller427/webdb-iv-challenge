exports.seed = async function(knex) {
  await knex("recipes-ingredients").insert(
    { id: 1, quantity: "1 Tomato", recipe_id: 1, ingredient_id: 1 },
    { id: 2, quantity: "1 can of sauce", recipe_id: 1, ingredient_id: 6 },
    { id: 3, quantity: "2 cups pecans", recipe_id: 2, ingredient_id: 2 },
    { id: 4, quantity: "1 cup sugar", recipe_id: 2, ingredient_id: 5 }
  );
};
