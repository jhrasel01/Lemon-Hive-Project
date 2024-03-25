// H1
export const H1 = ({ name, className }) => {
  return (
    <>
      <h1
        className={`text-[48px] leading-[40px] tab:text-[60px] tab:leading-[50px] laptop:text-[120px] laptop:leading-[110px] desktop:text-[140px]  desktop: font-bold ${className}`}
      >
        {name}
      </h1>
    </>
  );
};

// H2
export const H2 = ({ name, className }) => {
  return (
    <>
      <h2
        className={`text-xl tab:text-3xl laptop:text-5xl font-bold ${className}`}
      >
        {name}
      </h2>
    </>
  );
};

// H3
export const H3 = ({ name, className }) => {
  return (
    <>
      <h3 className={`text-xl laptop:text-2xl font-normal ${className}`}>
        {name}
      </h3>
    </>
  );
};

// H4
export const H4 = ({ name, className }) => {
  return (
    <>
      <h4 className={`text-base laptop:text-xl font-normal ${className}`}>
        {name}
      </h4>
    </>
  );
};

// H5
export const H5 = ({ name, className }) => {
  return (
    <>
      <h5 className={`text-lg font-normal ${className}`}>{name}</h5>
    </>
  );
};

// H6
export const H6 = ({ name, className, ...props }) => {
  return (
    <>
      <h6 className={`text-base font-normal ${className}`} {...props}>
        {name}
      </h6>
    </>
  );
};

// P
export const P = ({ name, className }) => {
  return (
    <>
      <p className={`text-sm font-normal ${className}`}>{name}</p>
    </>
  );
};

// Span
export const Span = ({ name, className }) => {
  return (
    <>
      <p className={`text-xs font-normal ${className}`}>{name}</p>
    </>
  );
};
