import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../store/auth/slice';
import questionsReducer from '../store/questions/slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    questions: questionsReducer,
  },
});
