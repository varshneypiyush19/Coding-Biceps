// import React from "react";
// import { format } from "date-fns";
// import { Card, CardContent } from "../Components/Card";
// import { Button } from "../Components/Button";
// import { Input } from "../Components/Input";

// const ConfirmationForm = ({ setStep, selectedDate, selectedTime }) => {
//   return (
//     <Card className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
//       <CardContent>
//         <h2 className="text-xl font-bold mb-2">
//           Issue Fix In React Project, Coding, Debugging
//         </h2>
//         <p className="text-gray-600">Video Call (30 mins)</p>

//         <div className="flex items-center justify-between bg-gray-200 p-2 rounded-md my-4">
//           <div>
//             <p className="text-sm font-semibold">
//               {format(selectedDate, "EEE, dd MMM")}
//             </p>
//             <p className="text-xs">{selectedTime} (GMT +5:30)</p>
//           </div>
//           <Button size="sm" onClick={() => setStep(1)}>
//             Change
//           </Button>
//         </div>

//         <Input className="w-full my-2" placeholder="Enter your name" />
//         <Input className="w-full my-2" placeholder="Enter your email" />
//         <Input className="w-full my-2" placeholder="What is the call about?" />
//         <Input className="w-full my-2" placeholder="Phone number" />

//         <label className="flex items-center space-x-2 mt-2">
//           <input type="checkbox" />
//           <span>Receive booking details on phone</span>
//         </label>

//         <h3 className="text-lg font-bold mt-6">Order Summary</h3>
//         <p className="text-sm">1 x Issue Fix Session - ₹602</p>
//         <p className="text-sm">Platform fee - ₹50</p>
//         <p className="text-lg font-bold">Total - ₹652</p>

//         <Button className="w-full mt-6">Confirm and Pay</Button>
//       </CardContent>
//     </Card>
//   );
// };

// export default ConfirmationForm;

import React, { useState } from "react";
import { format } from "date-fns";
import { Card, CardContent } from "../Components/Card";
import { Button } from "../Components/Button";
import Input from "../Components/Input"; // Import your custom Input component

const ConfirmationForm = ({ setStep, selectedDate, selectedTime }) => {
  // States to manage input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [callTopic, setCallTopic] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [receiveDetails, setReceiveDetails] = useState(false);
  const [nameError, setNameError] = useState("");

  const handleSubmit = () => {
    // Validation or form submission logic
    if (!name) {
      setNameError("Name is required");
      return;
    }
    // If valid, log the data (or send it somewhere)
    console.log({ name, email, callTopic, phoneNumber, receiveDetails });
  };

  return (
    <Card className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <CardContent>
        <h2 className="text-xl font-bold mb-2">
          Issue Fix In React Project, Coding, Debugging
        </h2>
        <p className="text-gray-600">Video Call (30 mins)</p>

        <div className="flex items-center justify-between bg-gray-200 p-2 rounded-md my-4">
          <div>
            <p className="text-sm font-semibold">
              {format(selectedDate, "EEE, dd MMM")}
            </p>
            <p className="text-xs">{selectedTime} (GMT +5:30)</p>
          </div>
          <Button size="sm" onClick={() => setStep(1)}>
            Change
          </Button>
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

        <Button className="w-full mt-6" onClick={handleSubmit}>
          Confirm and Pay
        </Button>
      </CardContent>
    </Card>
  );
};

export default ConfirmationForm;
