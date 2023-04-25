const actionDataHandler = (data) => {
  const { user } = data;

  return {
    user: userDataHandler(user),
  };
};

const userDataHandler = (data) => {
  const { email, stsTokenManager, uid } = data._delegate;
  const { accessToken, refreshToken } = stsTokenManager;

  const credentials = { email };
  const tokenData = { accessToken, refreshToken };

  return { uid, tokenData, credentials };
};

const errorDataHandler = (data) => {
  const error = data.code;
  return {
    error,
  };
};

export { actionDataHandler, userDataHandler, errorDataHandler };
