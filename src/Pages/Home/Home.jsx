import React from "react";
import useFirebase from "../../Hooks/useFirebase";
import { Button } from "../../Components/UI/UI";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { user, handleSignout } = useFirebase();
  const path = useNavigate();
  console.log(user);
  return (
    <section className="min-h-screen w-full flex items-center justify-center">
      {user?.displayName ? (
        <div className="p-5 border-b-2 flex items-end gap-5">
          <img src={user?.photoURL} alt="user-dp" className="h-[100px] w-[100px] rounded-full" />
          <div>
            <h1 className="text-4xl font-semibold font-mono mb-2">{user?.displayName}</h1>
            <h2 className="text-lg">{user?.email}</h2>
          </div>
          <Button className="bg-[#1A6ED8] text-white py-1" onClick={handleSignout}>
            Log Out
          </Button>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-3xl mb-3">Sorry You are not logged in</h1>
          <p className="text-xl mb-2">Please Log in</p>
          <Button className="bg-[#36A420] text-white w-fit mx-auto" onClick={() => path("/signup")}>
            Go to Log in page
          </Button>
        </div>
      )}
    </section>
  );
};
