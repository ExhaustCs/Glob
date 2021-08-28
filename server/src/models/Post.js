const mongoose = require('mongoose')

    const PostSchema = new mongoose.Schema({
        title:{
            type:String,
            required: true,
            unique: true
        },
        description:{
            type:String,
            required: true,
        },
        categories:{
            type: Array,
            required: false
        },
        image:{
            type: String,
            default: ""
        },
    
    }, {timestamps: true})

    module.exports = mongoose.model("Post", PostSchema)