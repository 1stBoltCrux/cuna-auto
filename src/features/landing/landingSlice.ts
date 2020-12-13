import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { LoanRequest, Errors } from "../../interfaces/interfaces";

interface LandingState {
  loanRequest: LoanRequest;
  errors: Errors;
}

const initialState: LandingState = {
  loanRequest: {
    autoPurchasePrice: 0,
    autoMake: "",
    autoModel: "",
    estimatedYearlyIncome: 0,
    estimatedCreditScore: 0,
  },
  errors: {
    autoPurchasePrice: null,
    autoMake: null,
    autoModel: null,
    estimatedYearlyIncome: null,
    estimatedCreditScore: null,
  },
};

export const landingSlice = createSlice({
  name: "landing",
  initialState,
  reducers: {
    setLoanRequest: (state, action: PayloadAction<LoanRequest>) => {
      state.loanRequest = action.payload;
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      //   state.value += 1;
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
    // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

export const { setLoanRequest, setErrors } = landingSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = (amount: number): AppThunk => (dispatch) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectLoanRequest = (state: RootState) => {
  return state && state.landing && state.landing.loanRequest;
};
export const selectErrors = (state: RootState) => {
  return state && state.landing && state.landing.errors;
};
export const isValid = createSelector(selectErrors, (errors: Errors) => {
  let errorsExist = false;
  Object.keys(errors).forEach((key) => {
    if (errors[key as keyof Errors]) {
      errorsExist = true;
    }
  });
  return errorsExist;
});

export default landingSlice.reducer;
