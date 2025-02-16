import * as React from "react";

export function Card({ children, className }) {
  return (
    <div className={`rounded-lg border bg-white p-4 shadow ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return <div className="p-4">{children}</div>;
}
