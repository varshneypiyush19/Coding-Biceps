const express = require("express");
const cors = require("cors"); // Import cors
require("dotenv").config();

const contactusroute = require("./routes/Contactus")

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors()); 
app.use('/api/v1' , contactusroute);

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
