import { configureStore } from "@reduxjs/toolkit";
//import thunk from 'redux-thunk';
import skyFitness from "./reducers/skyFitness";
import { skyFitnessQueryApiAuth } from "../pages/services/queryApi";

export const store = configureStore({
  reducer: {
    skyFitnessRedux:skyFitness,
    [skyFitnessQueryApiAuth.reducerPath]: skyFitnessQueryApiAuth.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(skyFitnessQueryApiAuth.middleware),
});

