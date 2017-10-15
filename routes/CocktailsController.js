const express = require("express")
const router = express.Router({mergeParams: true})
const { User, Cocktail } = require("../db/schema")

router.post("/" async (req,res) => {
    const newCocktail = new Cocktail()
    const user = await User.findById(req.params.userId)
    user.submitted.push(newCocktail)
    const saved = await user.save()
    res.json(saved)
})

