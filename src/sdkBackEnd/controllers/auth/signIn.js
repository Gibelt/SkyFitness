export default (app) =>
  ({ email, password }, responseFunc) =>
    app.auth
      .signInWithEmailAndPassword(email, password)
      .then((response) => responseFunc(handler(response)))
      .catch((response) => responseFunc({ error: response.code, response }));

const handler = (data) => {
  const { user } = data;
  return { token: user._delegate.stsTokenManager, user };
};

// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// export default ({ email, password }, responseFunc) => {
//   const auth = getAuth();
//   signInWithEmailAndPassword(auth, email, password)
//     .then((user) => responseFunc(user))
//     .catch((response) => responseFunc({ error: response.code, response }));
// };
