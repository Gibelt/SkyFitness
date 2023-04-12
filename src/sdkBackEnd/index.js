import app from 'firebase/compat/app'; // 'firebase/app';
import 'firebase/compat/database'; // 'firebase/database';
import 'firebase/compat/auth'; // 'firebase/auth';

// import 'firebase/compat/firestore';
// import 'firebase/storage';
// import 'firebase/messaging';

// import { getFirestore } from 'firebase/firestore';
// import { getDatabase } from 'firebase/database';
// import { initializeApp } from 'firebase/app'

import firebaseConfig from './config';
import Reduser, * as funx from './funx';

// ============================================================

//  App

app.initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);
const reducer = new Reduser(app);
export default reducer;

// DB

const { db } = reducer;
// const db = getDatabase(app);
export { db };

// Auth

const CreateUser = funx.CreateUser(reducer);
const SignIn = funx.SignIn(reducer);
export { CreateUser, SignIn };

//  Data

const GetData = funx.GetData(reducer);
export { GetData };

// ============================================================

// export { default as CreateUser } from './controllers/auth/create';
// export { default as SignIn } from './controllers/auth/signIn';
