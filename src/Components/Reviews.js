// import React from "react";
// import {
//   FaStar,
//   FaStarHalfAlt,
//   FaRegStar,
//   FaRegCheckCircle,
// } from "react-icons/fa";

// const Reviews = () => {
//   const reviews = [
//     {
//       rating: 4.0,
//       text: "I believe this has been one of the most successful and pleasant projects we’ve ever worked on.",
//       author: "Associate VP, Communication Group",
//     },
//     {
//       rating: 4.5,
//       text: "They were able to highlight and resolve issues that were not visible to us on WordPress.",
//       author: "Director, Home Decorations E-Commerce Company",
//     },
//     {
//       rating: 4.5,
//       text: "In addition to their development skills, I was most impressed by their commitment and patience.",
//       author: "Brand Partner, Digital Transformation Agency",
//     },
//     {
//       rating: 5.0,
//       text: "They are always available to help me out with my requirements and always come up with better results.",
//       author: "Owner, Otlon Retail",
//     },
//     {
//       rating: 5.0,
//       text: "They implemented my ideas smartly to deliver the best possible results.",
//       author: "Owner, One World Discoveries",
//     },
//     {
//       rating: 5.0,
//       text: "They provided us solutions with a better version and implement the changes quickly without any hassle.",
//       author: "Owner, Stone Universe Inc.",
//     },
//   ];

//   return (
//     <div className="py-10 px-60 text-center">
//       <h2 className="text-5xl font-bold mb-4">Reviews</h2>
//       <div className="bg-gray px-20 pt-4 pb-10">
//         {/* Header */}
//         <div className="max-w-6xl mx-auto text-center items-center justify-between flex  mb-2">
//           <h3 className="text-xl font-semibold text-gray-700">
//             AKS Interactive Solutions Pvt. Ltd. Reviews
//           </h3>
//           <div className="flex justify-center items-center text-lg font-medium text-gray-700 space-x-2 mt-2">
//             <span>4.8</span>
//             <div className="flex text-yellow">
//               {[...Array(5)].map((_, i) => (
//                 <FaStar key={i} className={`${i < 4 ? "fill-current" : ""}`} />
//               ))}
//             </div>
//             <span className="text-gray-500">(15 REVIEWS)</span>
//           </div>
//           <p className="text-gray-500 text-sm mt-1">Powered by Clutch</p>
//         </div>

//         {/* Reviews Grid */}
//         <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {reviews.map((review, index) => (
//             <div key={index} className="bg-white shadow-md rounded-lg p-6 ">
//               {/* Rating */}
//               <div className="flex items-center mb-4">
//                 <span className="text-lg font-bold">{review.rating}</span>
//                 <div className="flex ml-2 text-yellow	">
//                   {Array.from({ length: 5 }, (_, i) => {
//                     if (i < Math.floor(review.rating)) {
//                       // Full Star
//                       return <FaStar key={i} />;
//                     } else if (i < review.rating) {
//                       // Half Star
//                       return <FaStarHalfAlt key={i} />;
//                     } else {
//                       // Empty Star
//                       return <FaRegStar key={i} />;
//                     }
//                   })}
//                 </div>
//               </div>

//               {/* Review Text */}
//               <p className="text-gray-700 italic mb-4">"{review.text}"</p>

//               {/* Author */}
//               <p className="text-gray-900 text-sm font-medium mb-2">
//                 {review.author}
//               </p>

//               {/* Verified Badge */}
//               <div className="flex items-center text-gray-500 text-sm">
//                 <FaRegCheckCircle className="mr-2 text-blue-500" />
//                 Verified Review
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Reviews;
import React from "react";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaRegCheckCircle,
} from "react-icons/fa";

const Reviews = () => {
  const reviews = [
    {
      rating: 4.0,
      text: "I believe this has been one of the most successful and pleasant projects we’ve ever worked on.",
      author: "Associate VP, Communication Group",
    },
    {
      rating: 4.5,
      text: "They were able to highlight and resolve issues that were not visible to us on WordPress.",
      author: "Director, Home Decorations E-Commerce Company",
    },
    {
      rating: 4.5,
      text: "In addition to their development skills, I was most impressed by their commitment and patience.",
      author: "Brand Partner, Digital Transformation Agency",
    },
    {
      rating: 5.0,
      text: "They are always available to help me out with my requirements and always come up with better results.",
      author: "Owner, Otlon Retail",
    },
    {
      rating: 5.0,
      text: "They implemented my ideas smartly to deliver the best possible results.",
      author: "Owner, One World Discoveries",
    },
    {
      rating: 5.0,
      text: "They provided us solutions with a better version and implement the changes quickly without any hassle.",
      author: "Owner, Stone Universe Inc.",
    },
  ];

  return (
    <div className="py-6 px-6 sm:py-8 sm:px-10 md:py-10 md:px-20 xl:px-40  text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        Reviews
      </h2>
      <div className="bg-gray px-4 sm:px-8 md:px-16 lg:px-20 pt-4 pb-10">
        {/* Header */}
        <div className="max-w-6xl mx-auto text-center items-center justify-between flex flex-col sm:flex-row mb-2">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-700">
            AKS Interactive Solutions Pvt. Ltd. Reviews
          </h3>
          <div className="flex justify-center items-center text-base sm:text-lg font-medium text-gray-700 space-x-2 mt-2 sm:mt-0">
            <span>4.8</span>
            <div className="flex text-yellow">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={`${i < 4 ? "fill-current" : ""}`} />
              ))}
            </div>
            <span className="text-gray-500">(15 REVIEWS)</span>
          </div>
          <p className="text-gray-500 text-sm mt-1 sm:mt-0">
            Powered by Clutch
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200"
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                <span className="text-lg font-bold">
                  {review.rating.toFixed(1)}
                </span>
                <div className="flex ml-2 text-yellow">
                  {Array.from({ length: 5 }, (_, i) => {
                    if (i < Math.floor(review.rating)) {
                      // Full Star
                      return <FaStar key={i} />;
                    } else if (i < review.rating) {
                      // Half Star
                      return <FaStarHalfAlt key={i} />;
                    } else {
                      // Empty Star
                      return <FaRegStar key={i} />;
                    }
                  })}
                </div>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 italic mb-4">"{review.text}"</p>

              {/* Author */}
              <p className="text-gray-900 text-sm font-medium mb-2">
                {review.author}
              </p>

              {/* Verified Badge */}
              <div className="flex items-center text-gray-500 text-sm">
                <FaRegCheckCircle className="mr-2 text-blue-500" />
                Verified Review
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
