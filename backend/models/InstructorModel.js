const mongoose = require('mongoose');
const InstructorSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
  },
  image:{
    type:String,
    // required:true
 },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phone:{
    type:Number,
    required:true
  },
  token: {
    type: String
  },
  resume:{
    type:String,
    // required:true
  },
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", 
    },
  ],
  approved: {
    type: Boolean,
    default: false,
  },
}, {timestamps:true});

module.exports = mongoose.model('Instructor', InstructorSchema);

