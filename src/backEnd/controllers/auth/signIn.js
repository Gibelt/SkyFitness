import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const SignIn = (email, password) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then(console.log)
    .catch(console.error);
};

export default SignIn;
