/**
 * Created by Frank Qiu on 2016/10/27.
 */
'use strict';


var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var imgSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    path: {
        type: String,
        required: true
    }
});

var commoditySchema = new Schema({

        uid: {
            type: Number,
            unique: true
        },
        cid: {
            type: Number,
            unique: true
        },
        img: [imgSchema],
        title: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        chaffer: {
            type: Boolean,
            default: 'false'
        },
        address: {
            type: String,
            required: true
        },
        time: {
            type: Date,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }
);


module.exports = mongoose.model('Commodity', commoditySchema);