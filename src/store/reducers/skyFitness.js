/* eslint-disable no-restricted-syntax */
import * as MyType from "../actions/types/types";

export const initialState = {
  error: null,
  loginData: {},
  idRefTokenInt: null,
  refreshToken: null,
  errorMessage: {},
  userLogIn: false,
};

// eslint-disable-next-line default-param-last
export default function skyFitness(state = initialState, action) {
  switch (action.type) {
    case MyType.USER_SIGNUP_PASSNOTEQUAL:
      return {
        ...state,
        errorMessage: action.payload,
      };
      case MyType.USER_LOGIN_SUCCESS: {
        return {
          ...state,
          loading: false,
          error: null,
          loginData: action.payload,
        };
      }
    default:
      return state;
  }
}
