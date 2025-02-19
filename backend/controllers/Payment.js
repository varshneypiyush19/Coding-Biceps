const Razorpay = require("razorpay");
const crypto = require("crypto");
const axios = require("axios"); 
const User = require("../models/User");
const Booking = require("../models/bookingmodel");

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY, 
  key_secret: process.env.RAZORPAY_SECRET,
});



// **Create Booking Function**
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

const checkout = async (req, res) => { 
  const amount = Number(req?.body?.amount);
  const options = {
    amount:amount*100, // Razorpay accepts amount in paise
    currency: "INR",
    // receipt: `receipt_${Date.now()}`,
  };
   console.log("amount" , req.body.amount);
  const order = await razorpay.orders.create(options);
    // console.log(order);
  res.status(200).json({
    succcess:true,
    order
  })
}

// const paymentverification = async (req, res) => {
//   console.log("Received Data:", req.body);
  
//   const { razorpay_order_id, razorpay_payment_id, razorpay_signature, bookingdata } = req.body;
//   console.log(bookingdata);

//   if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
//     return res.status(400).json({
//       success: false,
//       message: "Missing required Razorpay fields",
//     });
//   }

//   const body = razorpay_order_id + "|" + razorpay_payment_id;
//   const expectedSignature = crypto
//     .createHmac("sha256", process.env.RAZORPAY_SECRET)
//     .update(body)
//     .digest("hex");

//   console.log("Expected Signature:", expectedSignature);
//   console.log("Received Signature:", razorpay_signature);

//   if (expectedSignature === razorpay_signature) {
//     console.log("✅ Payment Verified:", razorpay_payment_id);

//     // **Redirect the user instead of sending JSON**
//      res.redirect(302, `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`);
//     // res.redirect(302, `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`);
//   } else {
//     console.log("❌ Payment Verification Failed");
//     return res.status(400).json({
//       success: false,
//       message: "Invalid Signature",
//     });
//   }
// };


const paymentverification = async (req, res) => {
  console.log("Received Data:", req.body);

  const { razorpay_order_id, razorpay_payment_id, razorpay_signature, bookingData } = req.body;
  console.log("📌 Booking Data:", bookingData); 

  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    return res.status(400).json({
      success: false,
      message: "Missing required Razorpay fields",
    });
  }

  // **Step 1: Verify Payment Signature**
  const body = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_SECRET)
    .update(body)
    .digest("hex");

  console.log("Expected Signature:", expectedSignature);
  console.log("Received Signature:", razorpay_signature);

  if (expectedSignature === razorpay_signature) {
    console.log("✅ Payment Verified:", razorpay_payment_id);

    try {
      const response = await axios.post("http://localhost:4000/api/v1/create", bookingData, {
        headers: { "Content-Type": "application/json" },
      });

      console.log("📌 Booking Created via API:", response.data);

      return res.status(201).json({
        success: true,
        message: "Payment Verified & Booking Saved",
        booking: response.data.booking, 
      });
    } catch (error) {
      console.error("❌ Error saving booking via API:", error.response?.data || error.message);
      return res.status(500).json({
        success: false,
        message: "Database Error while creating booking",
      });
    }
  } else {
    console.log("❌ Payment Verification Failed");
    return res.status(400).json({
      success: false,
      message: "Invalid Signature",
    });
  }
};


module.exports = {  createBooking, checkout , paymentverification };


