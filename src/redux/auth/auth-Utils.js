import { notifyError, notifySucces } from "../../shared/toasters/Toasters";
import { formatDate } from "../../shared/utils/formatDate";
import {
  logIn,
  registration,
  logOut,
  updateUser,
  getCurrentUser,
} from "./auth-operations";

export const extraActions = [
  logIn,
  registration,
  logOut,
  updateUser,
  getCurrentUser,
];

export const getActions = (type) => extraActions.map((action) => action[type]);

export const handlePending = (state) => {
  state.isLoader = true;
};

export const handlefulfilled = (state) => {
  state.isLoader = false;
};

export const handleRejected = (state) => {
  state.isLoader = false;
};

export const userFulfilled = (
  state,
  { payload: { token, tokenLifeTime, refreshToken, user } }
) => {
  let birthday = "";
  if (user.birthday) {
    birthday = formatDate(user.birthday);
  }

  state.isLoggedIn = true;
  state.token = token;
  state.tokenLifeTime = tokenLifeTime;
  state.refreshToken = refreshToken;
  state.user = { ...state.user, ...user, birthday };

  if (user.isNewUser) {
    notifySucces(
      `congratulations ${user.name} registration successfully completed`
    );
  } else {
    notifySucces(`Welcome ${user.name}`);
  }
};

export const getInitialState = (state) => {
  notifySucces(`Goodbye ${state.user.name}`);

  state.isLoggedIn = false;
  state.token = "";
  state.user = { name: null, email: null };
};

export const getUserFulfilled = (state, { payload: { user } }) => {
  let birthday = "";
  if (user.birthday) {
    birthday = formatDate(user.birthday);
  }

  state.user = { ...user, birthday };
};

export const userUpdateFulfilled = (
  state,
  { payload: { token, tokenLifeTime, refreshToken, user } }
) => {
  let birthday = "";
  if (user.birthday) {
    birthday = formatDate(user.birthday);
  }

  state.token = token;
  state.tokenLifeTime = tokenLifeTime;
  state.refreshToken = refreshToken;
  state.user = { ...user, birthday };
};

export const userRefreshFulfilled = (
  state,
  { payload: { token, tokenLifeTime, refreshToken, user } }
) => {
  if (token) {
  } else {
    let birthday = "";
    if (user.birthday) {
      birthday = formatDate(user.birthday);
    }

    state.isRefreshing = false;
    state.user = { ...state.user, ...user, birthday };
    state.isLoggedIn = true;
    notifySucces(`Welcome ${user.name}`);
  }
};

export const userRefreshRejected = (state) => {
  state.isRefreshing = false;
  state.isLoggedIn = false;
};
