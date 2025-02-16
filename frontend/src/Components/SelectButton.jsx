export function SelectButton({ children, className, ...props }) {
  return (
    <button className={`${className}`} {...props}>
      {children}
    </button>
  );
}
