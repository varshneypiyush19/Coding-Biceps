const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },

  lastName: {
    type: String,
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
}, {timestamps:true});

module.exports = mongoose.model('User', userSchema);

