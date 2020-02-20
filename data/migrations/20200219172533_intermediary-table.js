
exports.up = function(knex) {
  return knex.schema
  .createTable('recipe_ingredients', tbl => {
      tbl.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

      tbl.integer('ingredients_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredients')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

      tbl.integer('ingredient_quantity', 12)

    tbl.primary(['recipe_id', 'ingredients_id'])
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recipe_ingredients')
};
