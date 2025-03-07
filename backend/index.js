const express = require("express");
const cors = require("cors");
require("dotenv").config();

const {cloudinaryConnect} = require("./config/cloudinary")
cloudinaryConnect();
const contactusroute = require("./routes/Contactus");
const userRoutes = require("./routes/userRoutes");
const bookingRoute = require("./routes/bookingRoute")
const paymentRoutes = require("./routes/paymentRoutes")
const instructortRoute = require("./routes/instructor")
const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Allow all origins


app.use('/api/v1', contactusroute);
app.use('/api/v1', userRoutes);
app.use('/api/v1' , bookingRoute)
app.use('/api/v1' ,paymentRoutes)
app.use('/api/v1' , instructortRoute)

app.get("/api/v1/getkey", (req, res) => {
  res.status(200).json({ key: process.env.RAZORPAY_KEY });
});


const dbConnect = require("./config/database");
dbConnect();

app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running"
  });
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});