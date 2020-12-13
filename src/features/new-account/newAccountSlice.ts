import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { User, NewAccountErrors } from "../../interfaces/interfaces";

interface NewAccountState {
  user: User;
  errors: NewAccountErrors;
  isValid: boolean;
}

const initialState: NewAccountState = {
  user: {
    username: "",
    password: "",
  },
  errors: {
    username: "",
    password: "",
    repeatPassword: "",
  },
  isValid: false,
};

export const newAccountSlice = createSlice({
  name: "newAccount",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    setErrors: (
      state,
      action: PayloadAction<{
        inputName: string;
        inputErrorValue: string | null;
      }>
    ) => {
      state.errors = {
        ...state.errors,
        [action.payload.inputName]: action.payload.inputErrorValue,
      };
    },
  },
});

export const { setErrors, setUser } = newAccountSlice.actions;

export const selectNewAccountState = (state: RootState) => {
  return state && state.newAccount;
};

export const selectErrors = createSelector(
  selectNewAccountState,
  (newAccountState) => {
    return newAccountState.errors;
  }
);

export const selectUser = createSelector(
  selectNewAccountState,
  (newAccountState) => {
    return newAccountState.user;
  }
);

export const selectIsValid = createSelector(
    selectNewAccountState,
    (newAccountState) => {
        return newAccountState.isValid;
    }
)

export const isValid = createSelector(
  selectErrors,
  selectUser,
  (errors: NewAccountErrors, loanRequest: User) => {
    let errorsExist = false;
    Object.keys(errors).forEach((key) => {
      if (errors[key as keyof NewAccountErrors]) {
        errorsExist = true;
      }
    });
    Object.keys(loanRequest).forEach((key) => {
      if (!loanRequest[key as keyof User]) {
        errorsExist = true;
      }
    });
    return errorsExist;
  }
);

export default newAccountSlice.reducer;
