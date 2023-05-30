/* eslint-disable no-param-reassign */
/* eslint-disable prettier/prettier */
import { createSlice } from "@reduxjs/toolkit";

// const email = useSelector((state) => state);

export const initialState = {
  email: "",
  password: "",
  checkbox: false,
};

export const slice = createSlice({
  name: "logs",
  initialState,
  reducers: {
    showEmail: (state, action) => {
      state.email = action.payload;
    },
    showPassword: (state, action) => {
      state.password = action.payload;
    },
    showCheckbox: (state, action) => {
      state.checkbox = action.payload;
    },
    showLogs: (state) => {
      console.log(state);
    },
  },
});

export const { showEmail, showPassword, showCheckbox, showLogs } =
  slice.actions;
export default slice.reducer;
