import * as MyType from '../types/types';

export const FetchSignUpPassNotEqual = (error) => ({
  type: MyType.USER_SIGNUP_PASSNOTEQUAL,
  payload: {
    ...error,
  },
});

export const FetchLoginSuccess = (loginData) => ({
  type: MyType.USER_LOGIN_SUCCESS,
  payload: {
    ...loginData,
  },
});

export const FetchLoginFailure = (error) => ({
  type: MyType.USER_LOGIN_FAILURE,
  payload: error,
});

export const FetchUpdateName = (data) => ({
  type: MyType.USER_UPDATE_NAME,
  payload: data,
});