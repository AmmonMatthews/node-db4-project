const db = require('../data/dbConfig.js')

module.exports = {
    getRecipes,
    getShoppingList,
    // getInstructions
}

function getRecipes(){
    return db('recipes');
}

function getShoppingList(id){
    return db('recipe_ingredients as ri')
    .join('ingredients as i', 'ri.ingredients_id', 'i.Id' )
    .join('recipes as r', 'ri.recipe_id', 'r.Id')
    .select('r.recipe_name', 'i.ingredients_name', 'ri.ingredients_quantity')
    .where("recipe_id", id)

}