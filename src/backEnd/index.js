import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

import firebaseConfig from "./config/firebaseConfig";

import Register from "./controllers/auth/register";
import SignIn from "./controllers/auth/signIn";

const firebaseApp = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp); // For Using Database

const requests = { SignIn, Register };
export default requests;
