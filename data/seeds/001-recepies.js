
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name:'tomato soup', description: "First, cut up and smash the tomatoes. Second, add water and stir. Last, add salt and pepper."},
        {recipe_name: 'bread', description: "First add dry ingredients and mix. Second add wet ingredients to dry ingredients and mix" },
        {recipe_name: 'jam', description:"First smash rasberries. Second add water. Last add sugar gradually while stirring"}
      ]);
    });
};
