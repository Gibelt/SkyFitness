import app from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';

// import 'firebase/storage';
// import 'firebase/messaging';

// import { getFirestore } from 'firebase/firestore';
// import { getDatabase } from 'firebase/database';
// import { initializeApp } from 'firebase/app'

import firebaseConfig from './config';
import getFunx from './funx';

// ============================================================

app.initializeApp(firebaseConfig);
const { reducer, funx } = getFunx(app);
const { db } = reducer;
const {
  // Auth
  createUser,
  signIn,
  signOut,
  getCurrentUser,
  updatePassword,

  //  Data
  getAllData,
  getDataByRef,
  postDataByRef,
  updateDataByRef,
  removeDataByRef,
} = funx;

// export default reducer;
export { db };
export {
  // Auth
  createUser,
  signIn,
  signOut,
  getCurrentUser,
  updatePassword,

  //  Data
  getAllData,
  getDataByRef,
  postDataByRef,
  updateDataByRef,
  removeDataByRef,
};
