import ReactDOM from "react-dom";

const SignupModal = (props) => {
  const { signUpModalOpen, setSignupModalOpen } = props.state;
  // if (!signUpModalOpen) {
  //   return null;
  //   console.log("I am Working");
  // } else {
  //   console.log("I am working");
  // }
  return ReactDOM.createPortal(
    <section>
      <h1>Hi Iam Faisal</h1>;
    </section>,
    document.getElementById("modal")
  );
};
export default SignupModal;
