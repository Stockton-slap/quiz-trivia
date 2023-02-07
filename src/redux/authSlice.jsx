import { createSlice } from "@reduxjs/toolkit";

import { register, login, logout } from "./authOperations";

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
      console.log(action);

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

    [logout.fulfilled](state, action) {
      state.user.name = "";
      state.user.email = "";
      state.user.password = "";
      state.token = null;
      state.isLoggedIn = false;
    },
    [logout.pending](state, action) {},
    [logout.rejected](state, action) {},
  },
});

export const authReducer = authSlice.reducer;
