const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  callTopic: {
    type: String,
    required: true,
  },
  receiveDetails: {
    type: Boolean,
    default: false,
  },
  selectedDate: {
    type: Date,
    required: true,
  },
  selectedTime: {
    type: String,
    required: true,
  },
  selectedTimezone: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Booking", bookingSchema);
