const User = require("../models/User");
const Booking = require("../models/bookingmodel");
const createBooking = async (req, res) => {
  try {
    const {
      name,
      email,
      phoneNumber,
      callTopic,
      receiveDetails,
      selectedDate,
      selectedTime,
      selectedTimezone,
    } = req.body;

    // Check if the user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found! Please register first." });
    }

    // Create a new booking linked to the existing user
    const newBooking = new Booking({
      name,
      email,
      phoneNumber,
      callTopic,
      receiveDetails,
      selectedDate: new Date(selectedDate), // Convert to ISO format
      selectedTime,
      selectedTimezone,
    });

    const savedBooking = await newBooking.save();
    // Add booking ID to user's bookings array
    user.bookings.push(savedBooking._id);
    await user.save();

    return res.status(201).json({
      message: "Booking created successfully!",
      booking: savedBooking,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
      },
    });
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { createBooking };
