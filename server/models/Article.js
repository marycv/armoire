const { Schema, model } = require('mongoose');

const articleSchema = new Schema({
    clothingType: {
        type: String,
        required: false
    },
    color: {
        type: String, 
        required: false
    },
    occassion: {
        type: String, 
        required: false
    },
    material: {
        type: String, 
        required: false,
    }
    // imageURL: {
    //     // type: String, 
    //     type:Object,
    //     required: false
    // }
})

const Article = model('Article', articleSchema);

module.exports = Article;























