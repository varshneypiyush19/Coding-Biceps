const express = require("express");
const {  checkout, paymentverification } = require("../controllers/Payment");
const router = express.Router();

router.post("/checkout" , checkout);
router.post("/paymentverification" , paymentverification)

module.exports = router;
