const express = require('express');
const Contact = require("../models/contactmodel");

exports.contactus = async (req, res) => {
    try {
        const { firstname, lastname, companyname, contactno, email, message } = req.body;
        if (!firstname || !lastname || !contactno || !email || !message|| !companyname) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }
         await Contact.create({
            firstname,
            lastname,
            contactno,
            email,
            message
        });
     //    console.log(contactdetails);
        return res.status(200).json({
            success: true,
            message: "Contact details sent successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong while sending contact data"
        });
    }
};
