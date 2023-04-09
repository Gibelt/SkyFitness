import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const register = ({ email, password }, responseFunc) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then(({ user }) => responseFunc(user))
    .catch((response) => responseFunc({ error: response.code, response }));
};

export default register;
