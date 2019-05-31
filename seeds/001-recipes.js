exports.seed = async function(knex) {
  await knex("recipes").insert([
    { id: 1, name: "Deep Dish", dish_id: 1 },
    { id: 2, name: "Pecan", dish_id: 2 },
    { id: 3, name: "Ceasar", dish_id: 3 }
  ]);
};
