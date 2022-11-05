const { Schema, model } = require('mongoose');
const Article = require('./Article');
//const bcrypt = require('bcrypt');

const closetSchema = new Schema({
    // id: {
    //     type: Number,
    //     required : true,
    //     unique : true,

    // },

    user_id:
        {
            type : Schema.Types.ObjectId,
            ref: 'User',
        },

    closetName: {
        type: String,
        required: true
    },

    article:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Article',
        }

    ]
})

const Closet = model('Closet',closetSchema);

module.exports = Closet;