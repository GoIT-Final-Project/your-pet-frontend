import { deletePet, postPet } from "./pets-operation";
const extraActions = [deletePet, postPet];

export const getActions = (type) => extraActions.map((action) => action[type]);

export const handlePending = (state) => {
  state.isLoading = true;
};

export const handlefulfilled = (state) => {
  state.isLoading = false;
  state.error = null;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
