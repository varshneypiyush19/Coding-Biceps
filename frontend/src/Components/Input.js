// import React from "react";

// const Input = ({
//   value,
//   onChange,
//   placeholder,
//   type = "text",
//   className = "",
// }) => {
//   return (
//     <input
//       type={type}
//       className={`w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
//       value={value}
//       onChange={onChange}
//       placeholder={placeholder}
//     />
//   );
// };

// export default Input;
// src/components/ui/Input.js

import React, { forwardRef } from "react";

// Forward ref to allow ref access from the parent component (useful for form handling, focus, etc.)
const Input = forwardRef(
  ({ className, placeholder, type = "text", error, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          ref={ref}
          type={type}
          className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 
          ${error ? "border-red-500" : "border-gray-300"} 
          ${className}`}
          placeholder={placeholder}
          {...props}
        />
        {error && <p className="text-sm text-red-500 mt-1">{error}</p>}{" "}
        {/* Display error message if provided */}
      </div>
    );
  }
);

Input.displayName = "Input"; // This helps with better debugging

export default Input;
