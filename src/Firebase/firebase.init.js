import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyALPp6ks5Dz2Fq6Bt9-J7cGTxU40k3XLOA",
  authDomain: "test-projects-dummy.firebaseapp.com",
  projectId: "test-projects-dummy",
  storageBucket: "test-projects-dummy.appspot.com",
  messagingSenderId: "883402532566",
  appId: "1:883402532566:web:9781d4a9e10e8a26c54b77",
};

const app = initializeApp(firebaseConfig);
export default app;
