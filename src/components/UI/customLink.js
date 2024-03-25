import Link from "next/link";

export default function CustomLink({
  children,
  href,
  className,
  name = null,
  ...props
}) {
  return (
    <>
      <Link
        href={href}
        className={`ease-in duration-200 ${className}`}
        {...props}
      >
        {name}
        {children}
      </Link>
    </>
  );
}
