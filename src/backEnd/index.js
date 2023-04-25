import app from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';
import firebaseConfig from './config';
import getFunx from './funx';

app.initializeApp(firebaseConfig);
const db = app.database();
const ref = (collection) => db.ref(collection);

const { funx } = getFunx(app);

const {
  createUser,
  signIn,
  signOut,
  getCurrentUser,
  updatePassword,
  getAllData,
  getDataByRef,
  postDataByRef,
  updateDataByRef,
  removeDataByRef,
} = funx;

export { db, ref };
export {
  createUser,
  signIn,
  signOut,
  getCurrentUser,
  updatePassword,
  getAllData,
  getDataByRef,
  postDataByRef,
  updateDataByRef,
  removeDataByRef,
};
