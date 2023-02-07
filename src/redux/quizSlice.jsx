import { createSlice } from "@reduxjs/toolkit";
import { fetchQuestions } from "./quizOperations";

const initialState = {
  questions: [],
  isLoading: false,
  currentQuestion: null,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  extraReducers: {
    [fetchQuestions.fulfilled](state, action) {
      state.questions = action.payload;
      state.currentQuestion = state.questions[0];
    },
  },
});

export const quizReducer = quizSlice.reducer;
