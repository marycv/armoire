const { Schema, model } = require('mongoose');
const Article = require('./Article');
//const bcrypt = require('bcrypt');

const closetSchema = new Schema({
    userId:
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },

    username:
        {
            type: String,
            ref: 'User',
        },

    closetName: {
        type: String,
        required: true
    },

    articles:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Article',
        }

    ]
})

const Closet = model('Closet',closetSchema);

module.exports = Closet;