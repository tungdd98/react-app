import { createSlice } from "@reduxjs/toolkit";

const authenticateSlice = createSlice({
  name: "authenticate",
  initialState: {
    accessToken: null,
  },
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
  },
});
const { actions, reducer } = authenticateSlice;
export const { setAccessToken } = actions;

export default reducer;
