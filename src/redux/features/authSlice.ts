import { RootState } from "./../store";
import { createSlice } from "@reduxjs/toolkit";
import { TAuthState } from "@/types";

const initialState: TAuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, logOut } = authSlice.actions;
export default authSlice.reducer;

export const getCurrentToken = (state: RootState) => state.auth.token;
export const getCurrentUser = (state: RootState) => state.auth.user;
