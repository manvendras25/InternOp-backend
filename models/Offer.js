const mongoose = require('mongoose');
const { Schema } = mongoose;

const OffersSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true, 
    },
    tag:{
        type: String,
        default: "General"
    },
    date:{
        type: Date,
        default: Date.now
    },
    studentsenrolled:[{
        userid:mongoose.ObjectId,
        name:String,
        email:String,
        profilepic:String,
        resume:String,
    }]
  });

  module.exports = mongoose.model('offers', OffersSchema);