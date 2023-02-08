import { createSlice } from "@reduxjs/toolkit";
import { fetchQuestions } from "./quizOperations";

import { toast } from "react-toastify";

const initialState = {
  questions: [],
  isLoading: false,
  currentQuestion: null,
  isError: false,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  extraReducers: {
    [fetchQuestions.fulfilled](state, action) {
      state.currentQuestion = 0;
      state.questions = action.payload;
    },
    [fetchQuestions.pending](state) {
      state.isLoading = true;
    },
    [fetchQuestions.rejected](state, action) {
      state.isError = action.payload;
      toast.error("Oops, something went wrong.");
    },
  },
  reducers: {
    getNextQuestion(state) {
      state.currentQuestion++;
    },
  },
});

export const { getNextQuestion } = quizSlice.actions;

export const quizReducer = quizSlice.reducer;
