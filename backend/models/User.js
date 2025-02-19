const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
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
  bookings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking", // Referencing the Booking model
    },
  ],
}, {timestamps:true});

module.exports = mongoose.model('User', userSchema);

