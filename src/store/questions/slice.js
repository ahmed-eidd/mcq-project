import { createSlice } from '@reduxjs/toolkit';
import { shuffleArr } from '../../helpers/shuffleArr';
import { questions } from './questions';

const initialState = {
  questions: questions,
  currentQuestion: 0,
  userAnswers: [],
};

const questionSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    /* Shuffling the questions and answers. */
    randomizeQuestions(state) {
      state.questions = shuffleArr(state.questions); // shuffle questions

      for (let i = 0; i < 4; i++) {
        // iterate over the questions and randomize the answers
        state.questions[i].answers = shuffleArr(state.questions[i].answers);
      }
    },

    addUserAnswer(state, { payload }) {
      state.userAnswers = payload;
    },
    onNextQuestion(state) {
      state.currentQuestion += 1;
    },
    resetQuestions(state) {
      state.currentQuestion = 0;
      state.userAnswers = [];
    },
  },
});

export const {
  randomizeQuestions,
  addUserAnswer,
  onNextQuestion,
  resetQuestions,
} = questionSlice.actions;

export default questionSlice.reducer;
