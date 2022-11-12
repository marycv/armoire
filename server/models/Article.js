const { Schema, model } = require('mongoose');

const articleSchema = new Schema({
    clothingType: {
        type: String,
        required: true
    },
    color: {
        type: String, 
        required: true
    },
    occassion: {
        type: String, 
        required: true
    },
    material: {
        type: String, 
        required: true,
    },
    imageURL: {
        type: String, 
        required: true
    }
})

const Article = model('Article', articleSchema);

module.exports = Article;























