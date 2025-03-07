

import React, { useState } from "react";
import { format } from "date-fns";
import { Card, CardContent } from "../Components/Card";
import { Button } from "../Components/Button";
import Input from "../Components/Input";
import toast from "react-hot-toast";
import axios from "axios"

import logo from "../assets/serviceimage.jpg"

const ConfirmationForm = ({ setStep, selectedDate, selectedTime, selectedTimeZone }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [callTopic, setCallTopic] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [receiveDetails, setReceiveDetails] = useState(false);
  const [nameError, setNameError] = useState("");

  const confirmandpayhandler = async (amount) => {
    if (!name) {
      toast.error("Name is required")
      return;
    }


    const bookingData = {
      name,
      email,
      callTopic,
      phoneNumber,
      receiveDetails,
      selectedDate,
      selectedTime,
      selectedTimezone: selectedTimeZone?.label,
    };
    const userResponse = await axios.post("http://localhost:4000/api/v1/checkuser", { email });
    if (!userResponse.data.exists) {
      toast.error("User not found! Please register first.");
      return;
    }


    // 
    try {
      // Create order
      const response1 = await axios.post("http://localhost:4000/api/v1/checkout", { amount });
      const order = response1.data.order; 
  
      // Get Razorpay Key
      const response2 = await axios.get("http://localhost:4000/api/v1/getkey");
      const key = response2?.data?.key;
  
      // Razorpay options
      const options = {
        key,
        amount: order.amount, 
        currency: "INR",
        name: "Coding Biceps",
        description: "Tutorial of RazorPay",
        image:logo,
        order_id: order.id, 
        // callback_url: "http://localhost:4000/api/v1/paymentverification",
        handler: async (response) => {
          console.log("✅ Payment Success:", response);
          
          // **Step 5: Call API to Save Booking**
          try {
            await axios.post("http://localhost:4000/api/v1/paymentverification", {
              ...response, 
              bookingData, 
            });
  
            toast.success("Payment verified & Booking saved!");
            window.location.href = `/paymentsuccess?reference=${response.razorpay_payment_id}`;
          } catch (error) {
            console.error("Error saving booking:", error);
            toast.error("Booking save failed!");
          }
        },
        prefill: {
          name: "Coding Biceps",
          email: "codebicepstemp@example.com",
          contact: "9999999999"
        },
        notes: {
          "address": "Razorpay Corporate Office"
        },
        theme: {
          "color": "#528FF0"
        },
        bookingData
        
      };
  
      // Open Razorpay payment window
      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error("Payment initiation error:", error);
      toast.error("Payment initiation failed!");
    }
  };
  
  return (
    <Card className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <CardContent>
        <h2 className="text-xl font-bold mb-2">Issue Fix In React Project, Coding, Debugging</h2>
        <p className="text-gray-600">Video Call (30 mins)</p>

        <div className="flex items-center justify-between bg-gray-200 p-2 rounded-md my-4">
          <div>
            <p className="text-sm font-semibold">{format(selectedDate, "EEE, dd MMM")}</p>
            <p className="text-xs">{selectedTime} (GMT +5:30)</p>
          </div>
          <Button size="sm" onClick={() => setStep(1)}>Change</Button>
        </div>

        <Input
          className="my-2"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={nameError}
        />
        <Input
          className="my-2"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          className="my-2"
          placeholder="What is the call about?"
          value={callTopic}
          onChange={(e) => setCallTopic(e.target.value)}
        />
        <Input
          className="my-2"
          placeholder="Phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <label className="flex items-center space-x-2 mt-2">
          <input
            type="checkbox"
            checked={receiveDetails}
            onChange={(e) => setReceiveDetails(e.target.checked)}
          />
          <span>Receive booking details on phone</span>
        </label>

        <h3 className="text-lg font-bold mt-6">Order Summary</h3>
        <p className="text-sm">1 x Issue Fix Session - ₹602</p>
        <p className="text-sm">Platform fee - ₹50</p>
        <p className="text-lg font-bold">Total - ₹652</p>

        <Button className="w-full mt-6" onClick={() => confirmandpayhandler(652)}>
          Confirm and Pay
        </Button>
      </CardContent>
    </Card>
  );
};

export default ConfirmationForm;
