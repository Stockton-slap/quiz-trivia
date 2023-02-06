import { createSlice } from "@reduxjs/toolkit";

import { register } from "./authOperations";

const initialState = {
  user: { name: "", email: "", password: "" },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user.name = action.name;
      state.user.email = action.email;
      state.token = action.token;
    },
    [register.pending](state, action) {
      state.isLoggedIn = true;
    },
    [register.rejected](state, action) {
      console.log(action);
    },
  },
});

export const authReducer = authSlice.reducer;
