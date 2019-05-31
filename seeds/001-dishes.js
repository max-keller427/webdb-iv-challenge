exports.seed = async function(knex) {
  await knex("dishes").insert([
    { id: 1, name: "Pizza" },
    { id: 2, name: "Pie" },
    { id: 3, name: "Salad" }
  ]);
};
