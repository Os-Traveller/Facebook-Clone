import React from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button } from "../../Components/UI/UI";

export const Signup = () => {
  const path = useNavigate();
  const radioInputClass = "w-full border-[1px] border-[#ccd0d5] py-1 px-3 rounded";
  return (
    <section className="min-h-screen bg-[#F0F2F5] flex justify-center items-center">
      <div className="w-fit flex flex-col text-center">
        <h1 className="text-[#1877F2] font-bold text-6xl font-mono mb-10">facebook</h1>

        {/* {form Container} */}
        <form className="bg-white p-5 rounded-lg shadow-lg">
          <h2 className="text-4xl mb-2">Create a new account</h2>
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
            <div className="flex gap-4">
              <Input type="date" />
              <label className={radioInputClass}>
                <input type="radio" name="gender" value="male" /> Male
              </label>
              <label className={radioInputClass}>
                <input type="radio" name="gender" value="female" /> Female
              </label>
            </div>

            {/* {Signup Button} */}
            <Button className="bg-[#36A420] text-white w-1/2 mx-auto mt-5 font-bold">Sign Up</Button>
            <p className="text-[#1877f2] cursor-pointer" onClick={() => path("/login")}>
              Already have any account?
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};
