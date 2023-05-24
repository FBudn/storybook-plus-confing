/* eslint-disable prettier/prettier */
/* eslint-disable no-param-reassign */
import { StyleSheet } from "react-native";
import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  data: [],
};

const slice = createSlice({
  name: "logs",
  initialState: defaultState,
  reducers: {
    addLogs: (state, action) => {
      state.data.push(action.payload);
    },
    removeAllLogs: (state) => {
      state.data = [];
    },
  },
});

export const { addLogs, removeAllLogs } = slice.actions;
export default slice.reducer;

const styles = StyleSheet.create({});
