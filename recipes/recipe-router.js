const express = require('express')

const Recipes = require('./recipe-modules.js')

const router = express.Router();
//Tested
router.get('/', (req, res) => {
    Recipes.getRecipes()
    .then(recipes =>{
        res.status(200).json(recipes)
    })
    .catch(err =>{
        console.log(err)
        res.status(404).json({error:"cannot find recipes"})
    })
})
//Tested
router.get('/:id/shoppingList', (req, res) =>{
    Recipes.getShoppingList(req.params.id)
    .then(list => {
        res.status(200).json(list)
    })
    .catch(err =>{
        console.log(err)
        res.status(404).json({error:"cannot find shopping list"})
    })
})

router.get('/:id/instructions', (req, res) => {
    Recipes.getInstructions(req.params.id)
    .then(instruct => {
        res.status(200).json(instruct);
    })
    .catch(err =>{
        console.log(err)
        res.status(404).json({error:"cannot find instructions"})
    })

})




module.exports = router