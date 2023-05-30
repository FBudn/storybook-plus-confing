/* eslint-disable import/prefer-default-export */
import { configureStore } from "@reduxjs/toolkit";
import logsReducer from "../redux/ReduxFormLogin";

export const store = configureStore({
  reducer: {
    logs: logsReducer,
  },
});
