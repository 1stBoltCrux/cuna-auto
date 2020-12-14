import newAccountReducer from "./newAccountSlice";
import { NewAccountState } from "./newAccountSlice";

const initialState: NewAccountState = {
    user: {
        username: "",
        password: "",
      },
      errors: {
        username: "",
        password: "",
        repeatPassword: "",
      }    
};

describe("new account reducer", () => {
  it("should return initial state", () => {
    expect(newAccountReducer(undefined, { type: "null_action" })).toEqual({
      ...initialState,
    });
  });

  it("should set the user object", () => {
    expect(
      newAccountReducer(
        {
          ...initialState,
        },
        {
            type: "newAccount/setUser",
            payload: {username: "Burt Boondoggle", password: "Burt2BBad88"}
        }
      )
    ).toEqual({
      ...initialState,
      user: {
        username: "Burt Boondoggle", password: "Burt2BBad88"
      }
    });
  });

  it("should set errors", () => {
    expect(
      newAccountReducer(
        { ...initialState },
        {
          type: "newAccount/setErrors",
          payload: { inputName: "username", inputErrorValue: "There's something wrong with the username." },
        }
      )
    ).toEqual({
      ...initialState,
      errors: {
        username: "There's something wrong with the username.",
        password: "",
        repeatPassword: "",
      }
    });
  });
});
