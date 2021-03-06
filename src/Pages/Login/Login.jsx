import React, { useState } from "react";
import { Button } from "../../Components/UI/UI";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const path = useNavigate();
  return (
    <>
      <main className=" bg-[#F0F2F5] h-screen ">
        <section className="lg:max-w-[1280px] md:container h-full mx-auto flex items-center justify-center gap-20">
          <div className="flex md:gap-20 gap-10 md:justify-center md:flex-row md:px-0 px-5 flex-col items-center text-center md:text-left">
            <div className="lg:w-1/2 w-full">
              <h1 className="text-[#1877F2] font-bold md:text-6xl text-5xl font-mono  mt-10 mb-4">facebook</h1>
              <h2 className="md:text-3xl text-xl font-semibold">Facebook helps you connect and share with the people in your life.</h2>
            </div>
            {/* facebook form  */}
            <form className="lg:w-1/3 w-full max-w-[400px] bg-white py-8 px-5 flex flex-col gap-5 rounded-lg shadow-lg">
              <input className="border-2 p-2 rounded-md" type="text" placeholder="Email address or phone number" />
              <input className="border-2 p-2 rounded-md" type="password" placeholder="Password" />
              <Button className="bg-[#166FE5] text-white text-xl font-semibold">Login</Button>
              <p className="text-center hover:underline text-[#166FE5] cursor-pointer">Forgottern password?</p>
              <hr />
              <Button className="bg-[#36A420] text-white w-fit mx-auto" onClick={() => path("/signup")}>
                Create New Account
              </Button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};
