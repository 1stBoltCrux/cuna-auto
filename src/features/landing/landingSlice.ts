import {
  createSlice,
  PayloadAction,
  createSelector,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../../app/store";
import { LoanRequest, Errors, MockResponse } from "../../interfaces/interfaces";
import { mockFetchCall } from "../../utilities/utilities";

interface LandingState {
  loanRequest: LoanRequest;
  errors: Errors;
  loading: boolean;
  toNewAccount: boolean;
  toDisqualified: boolean;
  disqualifiedMessage: string;
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
  loading: false,
  toNewAccount: false,
  toDisqualified: false,
  disqualifiedMessage: "",
};

export const landingSlice = createSlice({
  name: "landing",
  initialState,
  reducers: {
    setLoanRequest: (state, action: PayloadAction<LoanRequest>) => {
      state.loanRequest = action.payload;
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
    setLoading: (state) => {
      state.loading = !state.loading;
    },
    setRouteToNewAccount: (state) => {
      state.toNewAccount = !state.toNewAccount;
    },
    setRouteToDisqualified: (state) => {
      state.toDisqualified = !state.toDisqualified;
    },
    setDisqualifiedMessage: (state, action: PayloadAction<string>) => {
      state.disqualifiedMessage = action.payload;
    },
  },
});

export const {
  setLoanRequest,
  setErrors,
  setLoading,
  setRouteToNewAccount,
  setRouteToDisqualified,
  setDisqualifiedMessage,
} = landingSlice.actions;

export const selectLandingState = (state: RootState) => {
  return state && state.landing;
};

export const selectLoanRequest = (state: RootState) => {
  return state && state.landing && state.landing.loanRequest;
};
export const selectErrors = (state: RootState) => {
  return state && state.landing && state.landing.errors;
};
export const isValid = createSelector(
  selectErrors,
  selectLoanRequest,
  (errors: Errors, loanRequest: LoanRequest) => {
    let errorsExist = false;
    Object.keys(errors).forEach((key) => {
      if (errors[key as keyof Errors]) {
        errorsExist = true;
      }
    });
    Object.keys(loanRequest).forEach((key) => {
      if (!loanRequest[key as keyof LoanRequest]) {
        errorsExist = true;
      }
    });
    return errorsExist;
  }
);
export const selectNewAccountRedirect = (state: RootState) => {
  return state && state.landing && state.landing.toNewAccount;
};
export const selectDisqualifiedRedirect = (state: RootState) => {
  return state && state.landing && state.landing.toDisqualified;
};
export const isLoading = (state: RootState) => {
  return state && state.landing && state.landing.loading;
};

export const selectDisqualifiedMessage = createSelector(
  selectLandingState,
  (state) => state.disqualifiedMessage
);

export const postLoanRequest = (loanRequest: LoanRequest): AppThunk => (
  dispatch
) => {
  dispatch(setLoading());
  mockFetchCall(loanRequest).then((response) => {
    dispatch(setLoading());
    if (response.status === 403 || response.status === 400) {
      dispatch(setDisqualifiedMessage(response.message));
      dispatch(setRouteToDisqualified());
    } else {
      dispatch(setRouteToNewAccount());
    }
  }).catch((e) => {
    alert(e.message);
    dispatch(setLoading());
  })
};

export default landingSlice.reducer;
