
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {recipe_id: 1, ingredients_id: 9, ingredient_quantity: 2},
        {recipe_id: 1, ingredients_id: 1, ingredient_quantity: 4},
        {recipe_id: 1, ingredients_id: 8, ingredient_quantity: 1},
        {recipe_id: 1, ingredients_id: 10,ingredient_quantity: 1},
        {recipe_id: 2, ingredients_id: 2, ingredient_quantity: 4},
        {recipe_id: 2, ingredients_id: 4, ingredient_quantity: 1},
        {recipe_id: 2, ingredients_id: 1, ingredient_quantity: 2},
        {recipe_id: 2, ingredients_id: 5, ingredient_quantity: 1},
        {recipe_id: 2, ingredients_id: 7, ingredient_quantity: 1},
        {recipe_id: 3, ingredients_id: 7, ingredient_quantity: 1 },
        {recipe_id: 3, ingredients_id: 1, ingredient_quantity: 2},
        {recipe_id: 3, ingredients_id: 6, ingredient_quantity: 4},


      ]);
    });
};
