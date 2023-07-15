import { register, logIn, logOut } from './operations';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending](state, actions) {},
    [register.fulfilled](state, actions) {},
    [register.rejected](state, actions) {
      state.error = actions.payload;
    },

    [logIn.pending](state, actions) {},
    [logIn.fulfilled](state, actions) {
      state.user = actions.payload.user;
      state.token = actions.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.rejected](state, actions) {
      state.error = actions.payload;
    },

    [logOut.pending](state, actions) {},
    [logOut.fulfilled](state, actions) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [logOut.rejected](state, actions) {
      state.error = actions.payload;
    },
  },
});

export const authReducer = authSlice.reducer;