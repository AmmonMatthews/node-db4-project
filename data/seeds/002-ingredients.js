
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'cup  of water'},
        {ingredient_name: 'egg'},
        {ingredient_name: 'cup of flour'},
        {ingredient_name: '1/4 cup of butter'},
        {ingredient_name: 'tsp of yeast'},
        {ingredient_name: 'cup of rasberries'},
        {ingredient_name: 'cup of sugar'},
        {ingredient_name: 'tsp of salt'},
        {ingredient_name: 'tomatoe'},
        {ingredient_name: 'tsp of pepper'},






      ]);
    });
};
