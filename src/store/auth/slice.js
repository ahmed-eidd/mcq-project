import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const initialState = { user: null, isUserLoggedIn: false, isLoading: false };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, { payload }) {
      const { name, email } = payload;
      state.user = {
        name,
        email,
      };
      state.isUserLoggedIn = true;
    },
    logout(state) {
      state.user = null;
      state.isUserLoggedIn = false;
    },
    setIsLoading(state, payload) {
      state.isLoading = payload;
    },
  },
});

export const { login, logout, setIsLoading } = authSlice.actions;

export const authUser = (state) => state.auth.user;
export const authIsLoading = (state) => state.auth.isLoading;
export const authIsLoggedIn = (state) => state.auth.isUserLoggedIn;

export default authSlice.reducer;
