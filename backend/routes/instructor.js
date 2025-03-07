const express = require('express');
const router = express.Router();
const {upload} = require("../middlewares/multer.middleware")
const {instructorSignup} = require("../controllers/instructorcontroller")

router.post('/instructor/signup',upload.fields([{
    name:"resume",
    maxCount:1
}]), instructorSignup);

module.exports = router;