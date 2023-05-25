/* eslint-disable no-multi-assign */
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
/* eslint-disable no-param-reassign */
// import { StyleSheet } from "react-native";
import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  data: {
    email: "",
    password: "",
    checkbox: "",
  },
};

const slice = createSlice({
  name: "logs",
  initialState: defaultState,
  reducers: {
    showLogs: (state, action) => {
      const cos = action.payload;
      console.log(cos);
    },
  },
});

export const { showLogs } = slice.actions;
export default slice.reducer;

// const styles = StyleSheet.create({});
