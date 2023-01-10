// steps 
// 1 define schema -> Note: id, userId, title, content, dateAdded
// 2 create Model -> <modelName> <schema> Node


const mongoose = require("mongoose");

const NoteSchema = mongoose.Schema({
    id:{
        type: String,
        unique : true,
        required : true
    },

    userid:{
        type:String,
        required : true
    },

    title:{
        type:String,
        required : true
    },

    content:{
        type:String,
    },

    dateadded:{
        type:Date,
        default: Date.now
    }
});


module.exports = mongoose.model("Note", NoteSchema);
