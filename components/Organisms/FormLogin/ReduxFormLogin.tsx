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
      let logs = { ...state.data };
      logs = { ...action.payload };
      alert(Object.values(logs));
      console.log(logs);
    },
  },
});

export const { showLogs } = slice.actions;
export default slice.reducer;
