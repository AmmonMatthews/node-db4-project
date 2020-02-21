
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl => {
      tbl.increments();

      tbl.string('recipe_name', 128)
        .notNullable()
        .index();
      tbl.string('description', 128)

      
  })
    .createTable('ingredients', tbl => {
        tbl.increments();

        tbl.string('ingredient_name', 45)
        .notNullable()
        .index();
    })


};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
