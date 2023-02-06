import { createSlice } from "@reduxjs/toolkit";

import { register, login } from "./authOperations";

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
      state.user.password = action.password;
      state.token = action.token;
      state.isLoggedIn = true;
    },
    [register.pending](state, action) {
      state.isLoading = true;
    },
    [register.rejected](state, action) {
      console.log(action);
    },

    [login.fulfilled](state, action) {
      state.user.name = action.name;
      state.user.email = action.email;
      state.user.password = action.password;
      state.token = action.token;
      state.isLoggedIn = true;
    },
    [login.pending](state, action) {
      state.isLoading = true;
    },
    [login.rejected](state, action) {
      console.log(action);
    },
  },
});

export const authReducer = authSlice.reducer;
