/**
 * Created by Frank Qiu on 2016/10/27.
 */
'use strict';


var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var remarkSchema = new Schema({
    uid: {
        type: Number,
        unique: true
    },
    cid: {
        type: Number,
        unique: true
    },
    time: {
        type: Date,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('Remark', remarkSchema);