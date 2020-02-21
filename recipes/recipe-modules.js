const db = require('../data/dbConfig.js')

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes(){
    return db('recipes');
}

function getShoppingList(id){
    return db('recipe_ingredients as ri')
    .join('recipes as r', 'ri.recipe_id', 'r.id')
    .join('ingredients as i', 'ri.ingredients_id', 'i.id' )
    .select('r.recipe_name', 'i.ingredient_name', 'ri.ingredient_quantity')
    .where("ri.recipe_id", id)
}

function getInstructions(id){
    return db('recipes as r')
    .select('r.recipe_name as RecipeName','r.description as Instructions')
    .where('r.id', id)
}