export default function Container({ children, className }) {
  return (
    <>
      <div className={`container px-5 tab:px-8 max-w-[1500px] ${className}`}>
        {children}
      </div>
    </>
  );
}
