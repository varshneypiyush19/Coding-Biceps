// // import React, { useState } from "react";
// // import { format, addDays, isSaturday, isSunday } from "date-fns";
// // import { Card, CardContent } from "../Components/Card";
// // import { Button } from "../Components/Button";

// // const getUpcomingWeekends = () => {
// //   let date = new Date();
// //   let weekends = [];
// //   while (weekends.length < 5) {
// //     if (isSaturday(date) || isSunday(date)) {
// //       weekends.push(new Date(date));
// //     }
// //     date = addDays(date, 1);
// //   }
// //   return weekends;
// // };

// // const timeSlots = [
// //   "02:30 PM",
// //   "03:00 PM",
// //   "03:30 PM",
// //   "05:00 PM",
// //   "05:30 PM",
// //   "06:00 PM",
// //   "06:30 PM",
// //   "07:00 PM",
// //   "07:30 PM",
// // ];

// // const BookingUI = () => {
// //   const weekends = getUpcomingWeekends();
// //   const [selectedDate, setSelectedDate] = useState(weekends[0]);
// //   const [selectedTime, setSelectedTime] = useState(timeSlots[0]);

// //   return (
// //     <div className="flex flex-col md:flex-row bg-red-500 min-h-screen p-6 md:p-12">
// //       <Card className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/2">
// //         <CardContent>
// //           <h2 className="text-xl font-bold mb-2">
// //             Issue fix in React project, coding, debugging
// //           </h2>
// //           <p className="text-gray-600">30 mins meeting</p>
// //           <p className="mt-4">
// //             Are you encountering issues with your React project? Get expert
// //             assistance to swiftly resolve them.
// //           </p>
// //         </CardContent>
// //       </Card>

// //       <Card className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/2 mt-6 md:mt-0 md:ml-6">
// //         <CardContent>
// //           <h3 className="text-lg font-bold mb-4">When should we meet?</h3>
// //           <div className="flex space-x-2 overflow-x-auto">
// //             {weekends.map((date) => (
// //               <Button
// //                 key={date}
// //                 variant={selectedDate === date ? "default" : "outline"}
// //                 onClick={() => setSelectedDate(date)}
// //               >
// //                 {format(date, "EEE dd MMM")}
// //               </Button>
// //             ))}
// //           </div>
// //           <h3 className="text-lg font-bold mt-6">Select time of day</h3>
// //           <div className="grid grid-cols-3 gap-2 mt-2">
// //             {timeSlots.map((time) => (
// //               <Button
// //                 key={time}
// //                 variant={selectedTime === time ? "default" : "outline"}
// //                 onClick={() => setSelectedTime(time)}
// //               >
// //                 {time}
// //               </Button>
// //             ))}
// //           </div>
// //           <h3 className="text-lg font-bold mt-6">Timezone</h3>
// //           <p className="text-gray-600">
// //             (GMT+5:30) Chennai, Kolkata, Mumbai, New Delhi (IST)
// //           </p>
// //           <Button className="w-full mt-6">Confirm Details</Button>
// //         </CardContent>
// //       </Card>
// //     </div>
// //   );
// // };

// // export default BookingUI;

// import React, { useState, useEffect } from "react";
// import { format, addDays, isSaturday, isSunday } from "date-fns";
// import { Card, CardContent } from "../Components/Card";
// import { Button } from "../Components/Button";

// const getUpcomingWeekends = (startDate = new Date()) => {
//   let date = startDate;
//   let weekends = [];
//   while (weekends.length < 5) {
//     if (isSaturday(date) || isSunday(date)) {
//       weekends.push(new Date(date));
//     }
//     date = addDays(date, 1);
//   }
//   return weekends;
// };

// const timeSlots = [
//   "02:30 PM",
//   "03:00 PM",
//   "03:30 PM",
//   "05:00 PM",
//   "05:30 PM",
//   "06:00 PM",
//   "06:30 PM",
//   "07:00 PM",
//   "07:30 PM",
// ];

// const timezones = [
//   { label: "(GMT+5:30) IST - India", offset: 4 },
//   { label: "(GMT-5:00) EST - Eastern Time", offset: -5 },
//   { label: "(GMT+1:00) CET - Central Europe", offset: 1 },
//   { label: "(GMT+8:00) SGT - Singapore", offset: 8 },
// ];

// const BookingUI = ({
//   setStep,
//   selectedDate,
//   setSelectedDate,
//   selectedTime,
//   setSelectedTime,
// }) => {
//   const [weekends, setWeekends] = useState(getUpcomingWeekends());
//   //   const [selectedDate, setSelectedDate] = useState(weekends[0]);
//   //   const [selectedTime, setSelectedTime] = useState(timeSlots[0]);
//   const [selectedTimezone, setSelectedTimezone] = useState(timezones[0]);

//   // Move through weekends using left/right buttons
//   const shiftWeekends = (direction) => {
//     let newStartDate =
//       direction === "next"
//         ? addDays(weekends[weekends.length - 1], 1)
//         : addDays(weekends[0], -7);

//     const newWeekends = getUpcomingWeekends(newStartDate);
//     setWeekends(newWeekends);
//     setSelectedDate(newWeekends[0]); // Reset selection
//   };

//   // Convert time based on selected timezone
//   const convertTime = (time) => {
//     const [hour, minute, period] = time.match(/(\d+):(\d+) (AM|PM)/).slice(1);
//     let hour24 = period === "PM" ? (parseInt(hour) % 12) + 12 : parseInt(hour);
//     let convertedHour = hour24 + selectedTimezone.offset;

//     if (convertedHour >= 24) convertedHour -= 24;
//     if (convertedHour < 0) convertedHour += 24;

//     const newPeriod = convertedHour >= 12 ? "PM" : "AM";
//     const formattedHour = convertedHour % 12 || 12;

//     return `${formattedHour}:${minute} ${newPeriod}`;
//   };

//   return (
//     <div className="flex flex-col md:flex-row bg-red-500 min-h-screen p-6 md:p-12">
//       {/* Left Section */}
//       <Card className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/2">
//         <CardContent>
//           <h2 className="text-xl font-bold mb-2">
//             Issue fix in React project, coding, debugging
//           </h2>
//           <p className="text-gray-600">30 mins meeting</p>
//           <p className="mt-4">
//             Are you encountering issues with your React project? Get expert
//             assistance to swiftly resolve them.
//           </p>
//         </CardContent>
//       </Card>

//       {/* Right Section */}
//       <Card className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/2 mt-6 md:mt-0 md:ml-6">
//         <CardContent>
//           {/* Date Selection */}
//           <h3 className="text-lg font-bold mb-4">When should we meet?</h3>
//           {/* <div className="flex items-center space-x-2">
//             <Button onClick={() => shiftWeekends("prev")}>{"<"}</Button>
//             <div className="flex space-x-2 overflow-x-auto">
//               {weekends.map((date) => (
//                 <Button
//                   key={date}
//                   variant={selectedDate === date ? "default" : "outline"}
//                   onClick={() => setSelectedDate(date)}
//                 >
//                   {format(date, "EEE dd MMM")}
//                 </Button>
//               ))}
//             </div>
//             <Button onClick={() => shiftWeekends("next")}>{">"}</Button>
//           </div> */}
//           <div className="flex items-center space-x-2">
//             <Button onClick={() => shiftWeekends("prev")}>{"<"}</Button>
//             <div className="flex space-x-2 overflow-x-auto">
//               {weekends.map((date) => (
//                 <Button
//                   key={date}
//                   variant={selectedDate === date ? "default" : "outline"}
//                   onClick={() => setSelectedDate(date)}
//                   className="flex flex-col items-center px-3 py-2 text-sm"
//                 >
//                   <span className="text-xs ">{format(date, "EEE")}</span>
//                   <span className="text-xs font-semibold">
//                     {format(date, "dd")} {format(date, "MMM")}
//                   </span>
//                 </Button>
//               ))}
//             </div>
//             <Button onClick={() => shiftWeekends("next")}>{">"}</Button>
//           </div>

//           {/* Time Selection */}
//           <h3 className="text-lg font-bold mt-6">Select time of day</h3>
//           <div className="grid grid-cols-3 gap-2 mt-2">
//             {timeSlots.map((time) => (
//               <Button
//                 key={time}
//                 variant={selectedTime === time ? "default" : "outline"}
//                 onClick={() => setSelectedTime(time)}
//               >
//                 {convertTime(time)}
//               </Button>
//             ))}
//           </div>

//           {/* Timezone Selection */}
//           <h3 className="text-lg font-bold mt-6">Timezone</h3>
//           <select
//             className="w-full p-2 border rounded-md"
//             value={selectedTimezone.label}
//             onChange={(e) =>
//               setSelectedTimezone(
//                 timezones.find((tz) => tz.label === e.target.value)
//               )
//             }
//           >
//             {timezones.map((tz) => (
//               <option key={tz.label} value={tz.label}>
//                 {tz.label}
//               </option>
//             ))}
//           </select>

//           {/* Confirm Button */}
//           <Button className="w-full mt-6" onClick={() => setStep(2)}>
//             Confirm Details
//           </Button>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default BookingUI;
import React, { useState, useEffect } from "react";
import { format, addDays, isSaturday, isSunday } from "date-fns";
import { Card, CardContent } from "../Components/Card";
import { Button } from "../Components/Button";
import { SelectButton } from "./SelectButton";

const getUpcomingWeekends = (startDate = new Date()) => {
  let date = startDate;
  let weekends = [];
  while (weekends.length < 5) {
    if (isSaturday(date) || isSunday(date)) {
      weekends.push(new Date(date));
    }
    date = addDays(date, 1);
  }
  return weekends;
};

const timeSlots = [
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "05:00 PM",
  "05:30 PM",
  "06:00 PM",
  "06:30 PM",
  "07:00 PM",
  "07:30 PM",
];

const timezones = [
  { label: "(GMT+5:30) IST - India", offset: 5.5 },
  { label: "(GMT-5:00) EST - Eastern Time", offset: -5 },
  { label: "(GMT+1:00) CET - Central Europe", offset: 1 },
  { label: "(GMT+8:00) SGT - Singapore", offset: 8 },
];

const BookingUI = ({
  setStep,
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
  selectedTimezone,
  setSelectedTimezone,
}) => {
  const [weekends, setWeekends] = useState(getUpcomingWeekends());

  // Set initial values if none are selected
  useEffect(() => {
    if (!selectedDate) {
      setSelectedDate(weekends[0]);
    }
    if (!selectedTime) {
      setSelectedTime(timeSlots[0]);
    }
    if (!selectedTimezone) {
      setSelectedTimezone(timezones[0]);
    }
  }, [weekends, selectedDate, selectedTime, setSelectedDate, setSelectedTime, selectedTimezone, setSelectedTimezone]);

  // Move through weekends using left/right buttons
  const shiftWeekends = (direction) => {
    let newStartDate =
      direction === "next"
        ? addDays(weekends[weekends.length - 1], 1)
        : addDays(weekends[0], -7);

    const newWeekends = getUpcomingWeekends(newStartDate);
    setWeekends(newWeekends);
    setSelectedDate(newWeekends[0]); // Reset selection
  };

  // Convert time based on selected timezone
  const convertTime = (time) => {
    const [hour, minute, period] = time.match(/(\d+):(\d+) (AM|PM)/).slice(1);
    let hour24 = period === "PM" ? (parseInt(hour) % 12) + 12 : parseInt(hour);
    let convertedHour = hour24 + (selectedTimezone?.offset || 0); // Use fallback offset if selectedTimezone is undefined

    if (convertedHour >= 24) convertedHour -= 24;
    if (convertedHour < 0) convertedHour += 24;

    const newPeriod = convertedHour >= 12 ? "PM" : "AM";
    const formattedHour = convertedHour % 12 || 12;

    return `${formattedHour}:${minute} ${newPeriod}`;
  };

  return (
    <div className="flex flex-col md:flex-row bg-red-500 min-h-screen p-6 md:p-12">
      {/* Left Section */}
      <Card className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/2">
        <CardContent>
          <h2 className="text-xl font-bold mb-2">
            Issue fix in React project, coding, debugging
          </h2>
          <p className="text-gray-600">30 mins meeting</p>
          <p className="mt-4">
            Are you encountering issues with your React project? Get expert
            assistance to swiftly resolve them.
          </p>
        </CardContent>
      </Card>

      {/* Right Section */}
      <Card className="bg-rich p-6 rounded-lg shadow-md w-full md:w-1/2 mt-6 md:mt-0 md:ml-6">
        <CardContent>
          {/* Date Selection */}
          <h3 className="text-lg font-bold mb-4">When should we meet?</h3>
          <div className="flex items-center space-x-2">
            <Button onClick={() => shiftWeekends("prev")}>{"<"}</Button>
            <div className="flex space-x-2 overflow-x-auto">
              {weekends.map((date) => (
                <SelectButton
                  key={date}
                  variant={selectedDate === date ? "default" : "outline"}
                  onClick={() => setSelectedDate(date)}
                  className={`flex flex-col rounded-md border-richblue-200 items-center px-3 py-2 text-sm ${
                    selectedDate === date
                      ? "bg-richblue-200 text-white" // Reciprocal colors when selected
                      : "text-black"
                  }`}
                >
                  <span className="text-xs ">{format(date, "EEE")}</span>
                  <span className="text-xs font-semibold">
                    {format(date, "dd")} {format(date, "MMM")}
                  </span>
                </SelectButton>
              ))}
            </div>
            <Button onClick={() => shiftWeekends("next")}>{">"}</Button>
          </div>

          {/* Time Selection */}
          <h3 className="text-lg font-bold mt-6">Select time of day</h3>
          <div className="grid grid-cols-3 gap-2 mt-2">
            {timeSlots.map((time) => (
              <SelectButton
                key={time}
                variant={selectedTime === time ? "default" : "outline"}
                onClick={() => setSelectedTime(time)}
                className={`flex flex-col rounded-md border-richblue-200 items-center px-3 py-2 text-sm  ${
                  selectedTime === time
                    ? "bg-richblue-200 text-white" // Reciprocal colors when selected
                    : "text-black"
                }`}
              >
                {convertTime(time)}
              </SelectButton>
            ))}
          </div>

          {/* Timezone Selection */}
          <h3 className="text-lg font-bold mt-6">Timezone</h3>
          <select
            className="w-full p-2 border rounded-md"
            value={selectedTimezone?.label || ''}
            onChange={(e) =>
              setSelectedTimezone(
                timezones.find((tz) => tz.label === e.target.value)
              )
            }
          >
            {timezones.map((tz) => (
              <option key={tz.label} value={tz.label}>
                {tz.label}
              </option>
            ))}
          </select>

          {/* Confirm Button */}
          <Button className="w-full mt-6" onClick={() => setStep(2)}>
            Confirm Details
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingUI;
