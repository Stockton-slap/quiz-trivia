import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const fetchQuestions = createAsyncThunk("quiz", async (_, thunkAPI) => {
  try {
    const res = await axios.get(
      "https://the-trivia-api.com/api/questions?categories=film_and_tv&limit=5"
    );

    return res.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
