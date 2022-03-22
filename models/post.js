const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    emotion:{
        type: String,
        required:true
    },
    country:{
        type: String,
        required:true
    },
    state:{
        type: String,
        required:false
    },
    city:{
        type: String,
        required:false
    },
    date:{
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('posts',PostSchema);