import { createSelector } from '@reduxjs/toolkit';

const questionsState = (state) => state.questions;

export const allQuestionsSelector = createSelector(
  questionsState,
  (state) => state.questions
);
export const currentQuestionSelector = createSelector(
  questionsState,
  (state) => state.currentQuestion
);

export const questionsCountSelector = createSelector(
  questionsState,
  (state) => {
    return state.questions.length;
  }
);

export const userAnswersSelector = createSelector(
  questionsState,
  (state) => state.userAnswers
);

export const answersPercentageSelector = createSelector(
  questionsState,
  (state) => {
    let correctAnswers = state.userAnswers.filter(
      (ans) => ans.isCorrect === true
    );
    console.log(correctAnswers);

    return Math.round((correctAnswers.length / state.questions.length) * 100); // n of correct answers / all question n * 100 for percentage
  }
);
