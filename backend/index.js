const express = require("express");
const cors = require("cors");
require("dotenv").config();

const contactusroute = require("./routes/Contactus");
const userRoutes = require("./routes/userRoutes");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

// Allow all origins
app.use(cors());

app.use('/api/v1', contactusroute);
app.use('/api/v1', userRoutes);

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