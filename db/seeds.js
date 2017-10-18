require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})
mongoose.Promise = global.Promise

const db = mongoose.connection;
// Will log an error if db can't connect to MongoDB
db.on('error', function (err) {
    console.log('this is out error')
    console.log(err);
});
// Will log "database has been connected" if it successfully connects.
db.once('open', function () {
    console.log("Connected to MongoDB!");
});

const { Cocktail, Comment, User } = require("./schema")

User.remove({}, (err) => {
    console.log(err)
})

Cocktail.remove({}, (err) => {
    console.log(err)
})

const aaronComment = new Comment({
    submittedBy: "Aaron",
    textContent: "dis shit's dope yo"
})

const toryComment = new Comment({
    submittedBy: "Tory",
    textContent: "Shallow and pedantic"
})

const lastWord = new Cocktail({
    name: "Last Word",
    submittedBy: "Tory",
    img: "https://i.imgur.com/JwzoV82.jpg",
    recipe: "Gin, Chartreuse, Maraschino, Lime",
    recipeLink: "http://www.seriouseats.com/recipes/2008/01/cocktails-manhattan-recipe.html",
    comments: [aaronComment, toryComment]
})
const tomCollins = new Cocktail({
    name: "Tom Collins",
    submittedBy: "Mackenzie",
    img: "https://i.imgurx.com/NiL16VC.jpg",
    recipe: "Gin, Lemon, Simple Syrup, Bubbles",
    recipeLink: "http://www.seriouseats.com/recipes/2008/08/tom-collins-recipe.html",
    comments: [aaronComment, toryComment]
})

const manhattan = new Cocktail({
    name: "Perfect Manhattan",
    submittedBy: "Aaron",
    img: "https://i.imgur.com/Rw4iIII.jpg",
    recipe: "Rye, Carpano Antica, Dolin Blanc, Cherry",
    recipeLink: "http://www.seriouseats.com/recipes/2008/01/cocktails-manhattan-recipe.html",
    comments: [aaronComment, toryComment]
})

const aaron = new User({
    userName: "aaron",
    password: "password",
    submitted: [manhattan, lastWord]
})

const mackenzie = new User({
    userName: "mack",
    password: "password",
    submitted: [tomCollins]
})

aaron.save()
.then(() => {
    console.log("Aaron saved")
})
.catch((err) => {
    console.log(err)
})

mackenzie.save()
.then(() => {
    console.log("Mackenzie saved")
})
.catch((err) => {
    console.log(err)
})

manhattan.save()
.then(() => {
    console.log("Manhattan saved")
})
.catch((err) => {
    console.log(err)
})

tomCollins.save()
.then(() => {
    console.log("Tom Collins saved")
})
.catch((err) => {
    console.log(err)
})

lastWord.save()
.then(() => {
    console.log("Last Word saved")
})
.catch((err) => {
    console.log(err)
})

db.close()