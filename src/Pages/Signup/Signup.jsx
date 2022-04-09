import React from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button } from "../../Components/UI/UI";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import useFirebase from "../../Hooks/useFirebase";

export const Signup = () => {
  const path = useNavigate();
  const radioInputClass = "w-full border-[1px] border-[#ccd0d5] py-1 px-3 rounded";

  const { handleSigninWithGoogle } = useFirebase();

  return (
    <section className="min-h-screen bg-[#F0F2F5] flex justify-center items-center">
      <div className="w-fit flex flex-col text-center p-5">
        <h1 className="text-[#1877F2] font-bold md:text-6xl text-5xl font-mono md:mb-10 mb-5">facebook</h1>

        {/* {form Container} */}
        <div className="bg-white p-5 rounded-lg shadow-lg">
          <h2 className="md:text-4xl text-2xl mb-2">Create a new account</h2>
          <p className="text-[#606770] mb-4">It's quick and easy</p>
          <hr className="mb-4" />

          {/* {Name Container} */}
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <Input type="text" placeholder="First Name" />
              <Input type="text" placeholder="Surname" />
            </div>
            <Input type="email" placeholder="Email address" />
            <Input type="password" placeholder="Password" />

            {/* {Gender and birthday} */}
            <Input className="text-[#606770]" type="date" value="2017-06-01" />
            <div className="flex gap-4 ">
              <label className={radioInputClass}>
                <input type="radio" name="gender" value="male" /> Male
              </label>
              <label className={radioInputClass}>
                <input type="radio" name="gender" value="female" /> Female
              </label>
            </div>

            {/* {Signup Button} */}
            <Button className="bg-[#36A420] text-white w-full mx-auto mt-5 font-bold">Sign Up</Button>
            <Button className="bg-[#3F7EE8] text-white w-full mx-auto font-bold flex items-center justify-center gap-5" onClick={handleSigninWithGoogle}>
              <FcGoogle className="bg-white h-6 w-6 rounded-full p-1" /> Sign Up with Google
            </Button>
            <Button className="bg-[#3F7EE8] text-white w-full mx-auto font-bold flex items-center justify-center gap-5">
              <FaFacebookF className="text-[#3F7EE8] bg-white h-6 w-6 rounded-full p-1" /> Sign Up with Facebook
            </Button>
            <p className="text-[#1877f2] cursor-pointer" onClick={() => path("/login")}>
              Already have any account?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
