export const Button = (props) => {
  const className = `py-2 px-4 rounded ${props.className}`;
  return (
    <button className={className} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export const Input = (props) => {
  return <input className={`${props.className} w-full border-[1px] border-[#ccd0d5] py-1 px-3 rounded placeholder:text-[#606770]`} type={props.type} placeholder={props.placeholder} />;
};
