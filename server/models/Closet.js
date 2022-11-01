const { Schema, model } = require('mongoose');
//const bcrypt = require('bcrypt');

const closetSchema = new Schema({
    id: {
        type: Number,
        required : true,
        unique : true,

    },

    user_id:[
        {
            type : Schema.Types.ObjectId,
            ref: 'User',
        }
    ]
})

const Closet = model('Closet',closetSchema);

module.exports = Closet;