import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post(
        "https://connections-api.herokuapp.com/users/signup",
        credentials
      );

      token.set(res.data.token);

      console.log(res);

      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post(
        "https://connections-api.herokuapp.com/users/login",
        credentials
      );

      token.set(res.data.token);

      console.log(res);

      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
