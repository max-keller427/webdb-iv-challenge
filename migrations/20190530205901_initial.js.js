exports.up = async function(knex, Promise) {
  await knex.schema.createTable("dishes", tbl => {
    tbl.increments("id");
    tbl
      .string("name")
      .unique()
      .notNullable();
  });

  await knex.schema.createTable("recipes", tbl => {
    tbl.increments("id");
    tbl.string("name").notNullable();

    tbl
      .integer("dish_id")
      .references("id")
      .inTable("dishes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      .notNullable();
  });

  await knex.schema.createTable("ingredients", tbl => {
    tbl.increments("id");
    tbl.string("name").notNullable();

    tbl
      .integer("recipe_id")
      .references("id")
      .inTable("recipes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      .notNullable();

    tbl
      .integer("dish_id")
      .references("id")
      .inTable("dishes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      .notNullable();
  });

  await knex.schema.createTable("recipes-ingredients", tbl => {
    tbl.increments("id");
    tbl.string("quantity");

    tbl
      .integer("recipe_id")
      .references("id")
      .inTable("recipes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      .notNullable("");

    tbl
      .integer("ingredient_id")
      .references("id")
      .inTable("ingredients")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      .notNullable("");
  });

  await knex.schema.createTable("instructions", tbl => {
    tbl.increments();
    tbl.string("steps");
    tbl
      .integer("recipe_id")
      .references("id")
      .inTable("recipes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = async function(knex, Promise) {
  await knex.schema.dropTableIfExists("recipes-ingredients");
  await knex.schema.dropTableIfExists("ingredients");
  await knex.schema.dropTableIfExists("recipes");
  await knex.schema.dropTableIfExists("dishes");
};
