import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL_AUTH, WEB_API_KEY } from '../../constants';

export const skyFitnessQueryApiAuth = createApi({
  reducerPath: 'skyFitness',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL_AUTH,
  }),
  endpoints: (builder) => ({
    postSignUp: builder.query({
      query: ({ email, password }) => ({
        url: `:signUp?key=${WEB_API_KEY}`,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: `{"email":"${email}","password":"${password}","returnSecureToken":true}`,
      }),
      providesTags: [{ type: 'UserSignUp' }],
    }),
    postSignInWithPassword: builder.query({
      query: ({ email, password }) => ({
        url: `:signInWithPassword?key=${WEB_API_KEY}`,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: `{"email":"${email}","password":"${password}","returnSecureToken":true}`,
      }),
      providesTags: [{ type: 'UserLogIn' }],
    }),
    postUpdatePassword: builder.query({
      query: ({ idToken, newPassword }) => ({
        url: `:update?key=${WEB_API_KEY}`,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: `{"idToken":"${idToken}","password":"${newPassword}","returnSecureToken":true}`,
      }),
      providesTags: [{ type: 'NewPassword' }],
    }),
    postUpdateUserInfo: builder.query({
      query: ({ idToken, newUserName }) => ({
        url: `:update?key=${WEB_API_KEY}`,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: `{"idToken":"${idToken}","displayName":"${newUserName}","photoUrl":"", "returnSecureToken":true}`,
      }),
      providesTags: [{ type: 'UpdateUserInfo' }],
    }),
  }),
});

export const { usePostSignInWithPasswordQuery, usePostSignUpQuery, usePostUpdatePasswordQuery, usePostUpdateUserInfoQuery } =
  skyFitnessQueryApiAuth;

