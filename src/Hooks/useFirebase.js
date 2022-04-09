import React, { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/firebase.init";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState();

  const handleSigninWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        setUser(res.user);
        console.log("it's worked");
      })
      .catch((error) => console.error(error));
  };

  const handleSignout = () => {
    signOut(auth);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  return { user, handleSigninWithGoogle, handleSignout, setUser };
};

export default useFirebase;
