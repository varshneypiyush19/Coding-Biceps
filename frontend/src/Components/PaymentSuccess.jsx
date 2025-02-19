import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { CheckCircle, Copy } from "lucide-react";

const PaymentSuccess = () => {
  const [searchQuery] = useSearchParams();
  const [referenceNo, setReferenceNo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ref = searchQuery.get("reference");
    setReferenceNo(ref);
    setLoading(false);
  }, [searchQuery]);

  const copyToClipboard = () => {
    if (referenceNo) {
      navigator.clipboard.writeText(referenceNo);
      alert("Reference Number Copied!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md text-center">
        {/* Loader while fetching reference number */}
        {loading ? (
          <div className="text-gray-700 text-lg">Verifying payment...</div>
        ) : (
          <>
            {/* Success Icon */}
            <div className="flex justify-center">
              <CheckCircle className="text-green-500 w-16 h-16 animate-bounce" />
            </div>

            {/* Success Message */}
            <h1 className="text-2xl font-bold text-gray-800 mt-4">
              Payment Successful
            </h1>
            <p className="text-gray-600 mt-2">Thank you for your payment!</p>

            {/* Reference Number */}
            <div className="bg-gray-200 p-3 rounded-lg mt-4 flex justify-between items-center">
              <span className="text-gray-800 font-mono text-sm">
                {referenceNo || "N/A"}
              </span>
              <button
                onClick={copyToClipboard}
                className="text-gray-500 hover:text-gray-700"
              >
                <Copy size={20} />
              </button>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="/"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-all"
              >
                Back to Home
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentSuccess;
