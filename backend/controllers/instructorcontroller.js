const Instructor = require("../models/InstructorModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const uploadOnCloudinary = require("../services/uploadresume"); // Cloudinary function
const fs = require("fs");

exports.instructorSignup = async (req, res) => {
    try {
        const { firstName, lastName, email, password, phone } = req.body;

        // Validate input fields
        if (!firstName || !email || !password || !phone) {
            return res.status(400).json({
                success: false,
                message: "All required fields must be filled",
            });
        }

        // Check if instructor already exists
        const existingInstructor = await Instructor.findOne({ email });
        if (existingInstructor) {
            return res.status(400).json({
                success: false,
                message: "Instructor already exists, please login",
            });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        let resumeUrl = "";

        // Check if resume file is uploaded
        const resumepath = req.files?.resume[0]?.path
        console.log("resumepath", resumepath);
        if (resumepath) {
            const localFilePath = resumepath;
            console.log("localFilePath", localFilePath);
            // Upload file to Cloudinary
            const cloudinaryResponse = await uploadOnCloudinary(localFilePath);
            console.log("cloudinaryResponse", cloudinaryResponse);
            if (cloudinaryResponse) {
                resumeUrl = cloudinaryResponse.secure_url;
            }

            // Remove file from local storage
            fs.unlinkSync(localFilePath);
        }

        // Create a new Instructor document
        const newInstructor = await Instructor.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            phone,
            resume: resumeUrl,
        });

        return res.status(201).json({
            success: true,
            message: "Instructor registered successfully",
            instructor: newInstructor,
        });
    } catch (error) {
        console.error("Error in instructor signup:", error);
        return res.status(500).json({
            success: false,
            message: "Signup failed, please try again",
        });
    }
};
