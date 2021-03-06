import landingReducer from "./landingSlice";
import { LandingState } from "./landingSlice";

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

describe("landing reducer", () => {
  it("should return initial state", () => {
    expect(landingReducer(undefined, { type: "null_action" })).toEqual({
      ...initialState,
    });
  });

  it("should set the loan request", () => {
    expect(
      landingReducer(
        {
          ...initialState,
        },
        {
          type: "landing/setLoanRequest",
          payload: {
            autoPurchasePrice: 999,
            autoMake: "Honda",
            autoModel: "Accord",
            estimatedYearlyIncome: 999,
            estimatedCreditScore: 999,
          },
        }
      )
    ).toEqual({
      ...initialState,
      loanRequest: {
        autoPurchasePrice: 999,
        autoMake: "Honda",
        autoModel: "Accord",
        estimatedYearlyIncome: 999,
        estimatedCreditScore: 999,
      },
    });
  });

  it("should set errors", () => {
    expect(
      landingReducer(
        { ...initialState },
        {
          type: "landing/setErrors",
          payload: { inputName: "autoMake", inputErrorValue: "Toyota" },
        }
      )
    ).toEqual({
      ...initialState,
      errors: {
        autoPurchasePrice: null,
        autoMake: "Toyota",
        autoModel: null,
        estimatedYearlyIncome: null,
        estimatedCreditScore: null,
      },
    });
  });

  it("should set the loading state to true", () => {
    expect(
      landingReducer(
        {
          ...initialState,
        },
        {
          type: "landing/setLoading",
        }
      )
    ).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it("it should set toNewAccount to true", () => {
    expect(
      landingReducer(
        {
          ...initialState,
        },
        {
          type: "landing/setRouteToNewAccount",
        }
      )
    ).toEqual({
      ...initialState,
      toNewAccount: true,
    });
  });
  it("it should set toDisqualified to true", () => {
    expect(
      landingReducer(
        {
          ...initialState,
        },
        {
          type: "landing/setRouteToDisqualified",
        }
      )
    ).toEqual({
      ...initialState,
      toDisqualified: true,
    });
  });
  it("it should set the disqualified message", () => {
    expect(
      landingReducer(
        {
          ...initialState,
        },
        {
          type: "landing/setDisqualifiedMessage",
          payload: "You're disqualified pal.",
        }
      )
    ).toEqual({
      ...initialState,
      disqualifiedMessage: "You're disqualified pal.",
    });
  });
});
