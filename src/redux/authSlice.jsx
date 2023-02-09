import { createSlice } from "@reduxjs/toolkit";

import { register, login, logout } from "./authOperations";

import { toast } from "react-toastify";

const initialState = {
  user: { name: "", email: "", password: "" },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  isError: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user.name = action.payload.user.name;
      state.user.email = action.payload.user.email;
      state.user.password = action.payload.user.password;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [register.pending](state) {
      state.isLoading = true;
    },
    [register.rejected](state, action) {
      state.isError = action.payload;
      toast.error("Oops, something went wrong.");
    },

    [login.fulfilled](state, action) {
      state.user.name = action.payload.user.name;
      state.user.email = action.payload.user.email;
      state.user.password = action.payload.user.password;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [login.pending](state) {
      state.isLoading = true;
    },
    [login.rejected](state, action) {
      state.isError = action.payload;
      toast.error("Oops, something went wrong.");
    },

    [logout.fulfilled](state, action) {
      state.user.name = "";
      state.user.email = "";
      state.user.password = "";
      state.token = null;
      state.isLoggedIn = false;
    },
    [logout.pending](state) {
      state.isLoading = true;
    },
    [logout.rejected](state, action) {
      state.isError = action.payload;
      toast.error("Oops, something went wrong.");
    },
  },
});

export const authReducer = authSlice.reducer;
