const express = require('express')

const Recipes = require('./recipe-modules.js')

const router = express.Router();

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



module.exports = router