/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL_AUTH, WEB_API_KEY } from "../../constants";

export const skyFitnessQueryApiAuth = createApi({
  reducerPath: "skyFitness",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL_AUTH,
  }),
  endpoints: (builder) => ({
    postSignUp: builder.query({
      query: ({ email, password }) => ({
        url: `:signUp?key=${WEB_API_KEY}`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: `{"email":"${email}","password":"${password}","returnSecureToken":true}`,
      }),
      providesTags: [{ type: "UserSignUp" }],
    }),
    postSignInWithPassword: builder.query({
      query: ({ email, password }) => ({
        url: `:signInWithPassword?key=${WEB_API_KEY}`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: `{"email":"${email}","password":"${password}","returnSecureToken":true}`,
      }),
      providesTags: [{ type: "UserLogIn" }],
    }),
  }),
});

export const { usePostSignInWithPasswordQuery, usePostSignUpQuery } =
  skyFitnessQueryApiAuth;

/* const DATA_TAG = { type: 'allTracks', id: 'LIST' };
const DATA_SELECT_TAG = { type: 'SelectionById', id: 'LIST' };
const DATA_FAV_TAG = { type: 'allFavTracks', id: 'LIST' };
export const spotyfyQueryApi = createApi({
  reducerPath: 'skyFitness',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL_AUTH,
    prepareHeaders: (headers, { getState }) => {
      const { accessToken } = getState().spotyfy;
      if (accessToken) {
        headers.set('authorization', `Bearer ${accessToken}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllTrack: builder.query({
      query: () => 'catalog/track/all/',
      transformResponse: (response, meta, arg) => response,
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({ type: DATA_TAG.type, id })),
      ],
    }),

    getTrackById: builder.query({
      query: ({ id }) => `catalog/track/${id}/`,
      providesTags: ['playingTrack'],
    }),

    setFavTrackById: builder.mutation({
      query: ({ btnValue, idTrack }) => ({
        url: `catalog/track/${idTrack}/favorite/`,
        method: `${btnValue === 'like' ? 'POST' : 'DELETE'}`,
      }),
      invalidatesTags: (post) => [
        { type: DATA_TAG.type, id: post?.id },
        { type: 'playingTrack' },
        { type: DATA_SELECT_TAG.type, id: post?.id },
        { type: DATA_FAV_TAG.type, id: post?.id },
      ],
    }),
    getSelectionById: builder.query({
      query: ({ idSet: id }) => `catalog/selection/${id}/`,
      providesTags: (result = []) => [
        ...result.items.map(({ id: idTrack }) => ({
          type: DATA_SELECT_TAG.type,
          id: idTrack,
        })),
      ],
    }),
    getAllFavTracks: builder.query({
      query: () => 'catalog/track/favorite/all/',
      transformResponse: (response, meta, arg) => response,
      transformErrorResponse: (response, meta, arg) => response,
      providesTags: (result = []) => [
        ...result.map(({ id }) => ({
          type: DATA_FAV_TAG.type,
          id,
        })),
      ],
    }),
  }),
}); */
