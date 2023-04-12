import CreateUser from './controllers/auth/create';
import SignIn from './controllers/auth/signIn';

import GetData from './controllers/data/get';

export default class {
  constructor(app) {
    this.app = app;
    this.auth = app.auth();
    this.db = app.database(); // app.firestore();
  }

  // Auth

  createUser = CreateUser(this);

  signIn = SignIn(this);

  signOut = () => this.auth.signOut();

  //   doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);

  //  Data

  getData = GetData(this);
}

export { CreateUser, SignIn, GetData };
