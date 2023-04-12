export default (app) =>
  ({ email, password }, responseFunc) =>
    app.auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => responseFunc(user))
      .catch((response) => responseFunc({ error: response.code, response }));

// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

// export default ({ email, password }, responseFunc) => {
//     //  const auth = getAuth();
//     createUserWithEmailAndPassword(auth, email, password)
//       .then(({ user }) => responseFunc(user))
//       .catch((response) => responseFunc({ error: response.code, response }));
//   };
