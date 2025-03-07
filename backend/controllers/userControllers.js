const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const BlacklistToken = require("../models/blacklistToken.model")
const {validationResult }= require('express-validator')
exports.signup = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            message: errors.array()[0].msg,
        });
    }
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            confirmpassword,
            phone
        } = req.body;
        if (
            !firstName ||
            !confirmpassword ||
            !email ||
            !password ||
            !phone
        ) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        const existinguser = await User.findOne({ phone });
        if (existinguser) {
            return res.status(400).json({
                success: false,
                message: "user is already registered",
            });
        }
        if (password !== confirmpassword) {
            return res.status(400).json({
                success: false,
                message: "Password and Confirm Password does not matched",
            });
        }
      
      
        const hashedpassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            firstName,
            lastName,
            email,
            password: hashedpassword,
            phone,
            image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
        });
        // console.log("hello");
        // console.log(user);
        const token = user.generateAuthToken();
        return res.status(200).json({
            success: true,
            messgae: "User registered Successfully",
            token,
            user
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            success: false,
            message: "Something Went Wrong",
        });
    }
};

//login 

exports.login = async (req, res) => {
    try {
        const errors= validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
        const { phone, password } = req.body;
        if (!phone || !password) {
            return res.status(403).json({
                success: false,
                message: "All fields are required",
            });
        }

        const existingUser = await User.findOne({ phone });
        if (!existingUser) {
            return res.status(400).json({
                success: false,
                message: "User does not exist, please sign up",
            });
        }

        if (await bcrypt.compare(password, existingUser.password)) {
            const payload = {
                email: existingUser.email,
                id: existingUser._id
            };

            const token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: "2h",
            });

            existingUser.token = token;
            existingUser.password = undefined;

            return res.status(200).json({
                success: true,
                message: "Login successful",
                token,
                user: existingUser
            });
        } else {
            return res.status(401).json({
                success: false,
                message: "Incorrect password",
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Login failure, please try again",
        });
    }
};

exports.checkUser = async (req, res) => {
    try {
      const { email } = req.body;
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.json({ exists: false });
      }
      res.json({ exists: true });
    } catch (error) {
      console.error("Error checking user:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  