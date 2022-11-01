const { Schema, model } = require('mongoose');

const articleSchema = new Schema({
    clothing_type: {
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
    
    user_id:[
    {
        type : Schema.Types.ObjectId,
        ref: 'User',
    },
    ],

    material:[
    {
        type: String, 
        required: true,
    },
    ],

    id: {
        type: Number,
        required: true, 
        unique: true,
    },
    

})

const Article = model('Article', articleSchema);

module.exports = Article;























