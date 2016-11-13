/**
 * Created by Frank Qiu on 2016/10/27.
 */
'use strict';


var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var userSchema = new Schema({
        uid: {
            type: Number,
            unique: true,
            autoincrement: true
        },
        name: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }

    }
);


module.exports = mongoose.model('User', userSchema);