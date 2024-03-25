"use client";

export default function CustomButton({ children, type, className, ...props }) {
  return (
    <>
      <button
        {...props}
        type={type}
        className={`ease-in duration-200 ${className}`}
      >
        {children}
      </button>
    </>
  );
}
