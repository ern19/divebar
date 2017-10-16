const express = require("express")
const router = express.Router({mergeParams: true})
const { User, Cocktail } = require("../db/schema")

router.post("/", async (req,res) => {
    console.log('route hit')
    console.log(req.params.userId)
    console.log(req.body)
    const newCocktail = new Cocktail(req.body.submitted)
    const user = await User.findById(req.params.userId)
    user.submitted.push(newCocktail)
    const saved = await user.save()
    res.json(saved)
    
})

router.patch("/:id", async (req, res) => {
    const updatedSubmission = req.body.submitted
    const user = await User.findById(req.params.userId)
    const submission = user.submitted.id(req.params.id)
    submission.name = updatedSubmission.name
    submission.recipe = updatedSubmission.recipe
    submission.img = updatedSubmission.img
    submission.submittedBy = updatedSubmission.submittedBy
    const saved = await user.save()
    res.json(saved)

})

router.delete("/:id", async (req, res) => {
    const user = await User.findById(req.params.userId)
    user.submitted.id(req.params.id).remove()
    const saved = await user.save()
    res.json(saved)
})

module.exports = router
