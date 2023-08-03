import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  getCurrentUser,
  logIn,
  logOut,
  refreshUser,
  registration,
  updateUser,
  refreshToken,
  addUserPet,
  deleteUserPet,
} from "./auth-operations";

import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  getActions,
  getInitialState,
  getUserFulfilled,
  handlePending,
  handleRejected,
  handlefulfilled,
  userFulfilled,
  userUpdateFulfilled,
  userRefreshFulfilled,
  userRefreshRejected,
  refreshTokenFullfilled,
  addPet,
  deletePet,
} from "./auth-utils";

const initialState = {
  user: {
    name: "",
    email: "",
    birthday: "",
    pets: [],
    city: "",
    phone: "",
    isNewUser: false,
  },
  token: null,
  tokenLifeTime: null,
  refreshToken: null,
  isLoggedIn: false,
  isLoader: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      // REGISTRATION
      .addCase(registration.fulfilled, userFulfilled)

      //LogIn
      .addCase(logIn.fulfilled, userFulfilled)
      .addCase(logIn.rejected, (state) => {
        state.isLoggedIn = false;
      })

      // LOGOUT
      .addCase(logOut.fulfilled, getInitialState)

      // UPDATE USER
      .addCase(updateUser.fulfilled, userUpdateFulfilled)

      // GetCurrentUser
      .addCase(getCurrentUser.fulfilled, getUserFulfilled)

      //REFRESH USER
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, userRefreshFulfilled)

      .addCase(refreshUser.rejected, userRefreshRejected)

      .addCase(refreshToken.fulfilled, refreshTokenFullfilled)

      .addCase(addUserPet.fulfilled, addPet)

      .addCase(deleteUserPet.fulfilled, deletePet)

      .addMatcher(isAnyOf(...getActions("pending")), handlePending)
      .addMatcher(isAnyOf(...getActions("fulfilled")), handlefulfilled)
      .addMatcher(isAnyOf(...getActions("rejected")), handleRejected);
  },
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["token", "tokenLifeTime", "refreshToken"],
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
export default authReducer;
