import { createSelector } from '@reduxjs/toolkit';

const authState = (state) => state.auth;

export const authUserSelector = createSelector(
  authState,
  (state) => state.user
);
export const authIsLoadingSelector = createSelector(
  authState,
  (state) => state.isLoading
);
export const authIsLoggedInSelector = createSelector(
  authState,
  (state) => state.isUserLoggedIn
);
