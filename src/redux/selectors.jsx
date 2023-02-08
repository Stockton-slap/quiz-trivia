export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
export const selectName = (state) => state.auth.user.name;
export const selectUserEmail = (state) => state.auth.user.email;
export const selectUserPassword = (state) => state.auth.user.password;
export const selectIsLoading = (state) => state.auth.isLoading;

export const selectQuestions = (state) => state.quiz.questions;
export const selectCurrentQuestion = (state) => state.quiz.currentQuestion;
// export const selectIsLoading = (state) => state.quiz.isLoading;
