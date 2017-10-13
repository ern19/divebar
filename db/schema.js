const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const CommentSchema = new Schema({
    submittedBy: {
        type: String,
        required: true
    },
    textContent: {
        type: String,
        require: true
    }    
})

const CocktailSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    submittedBy: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    recipe: {
        type: String,
        required: true
    },
    comments: {
        type: [CommentSchema],
        required: true
    }
})

const UserSchema = {
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    submitted: [CocktailSchema]
}

const Comment = mongoose.model("Comment", CommentSchema)
const Cocktail = mongoose.model("Cocktail", CocktailSchema)
const User = mongoose.model("User", UserSchema)

module.exports = {
    Comment, Cocktail, User
}