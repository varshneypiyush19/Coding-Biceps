export function Button({ children, className, ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded-md  bg-richblue-200 text-white hover:bg-gray-800 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
