exports.seed = async function(knex) {
  await knex("ingredients").insert([
    { id: 1, name: "Tomato", dish_id: 1, recipe_id: 1 },
    { id: 2, name: "Pecans", dish_id: 2, recipe_id: 2 },
    { id: 3, name: "Iceburg Lettuce", dish_id: 3, recipe_id: 3 },
    { id: 4, name: "Tomato", dish_id: 3, recipe_id: 3 },
    { id: 5, name: "Sugar", dish_id: 2, recipe_id: 2 },
    { id: 6, name: "Tomato Sauce", dish_id: 1, recipe_id: 1 },
    { id: 7, name: "Anchovies", dish_id: 1, recipe_id: 1 },
    { id: 8, name: "Pie Crust", dish_id: 2, recipe_id: 2 }
  ]);
};
