import { register, logIn, logOut, refreshUser } from './operations';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending](state, actions) {},
    [register.fulfilled](state, actions) {
      state.user = actions.payload.user;
      state.token = actions.payload.token;
      state.isLoggedIn = true;
    },
    [register.rejected](state, actions) {},

    [logIn.pending](state, actions) {},
    [logIn.fulfilled](state, actions) {
      state.user = actions.payload.user;
      state.token = actions.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.rejected](state, actions) {},

    [logOut.pending](state, actions) {},
    [logOut.fulfilled](state, actions) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [logOut.rejected](state, actions) {},

    [refreshUser.pending](state, actions) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, actions) {
      state.user = actions.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshUser.rejected](state, actions) {
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;
