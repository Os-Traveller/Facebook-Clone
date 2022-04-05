const Button = (props) => {
  const className = `py-2 px-4 rounded ${props.className}`;
  return (
    <button className={className} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

const SignUpModal = () => {
  return (
    <section>
      <h1>Hi I am Faisal</h1>
    </section>
  );
};

export { Button, SignUpModal };
