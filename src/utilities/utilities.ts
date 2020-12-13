import { LoanRequest, MockResponse } from "../interfaces/interfaces";
import { timeout } from "../constants/constants";

const mockFetchCall = (req: LoanRequest): Promise<MockResponse> => {
  return new Promise((resolve, reject) => {
    const responseObject: MockResponse = {
      status: 200,
      message: "QUALIFIED",
    };
    setTimeout(() => {
      const {
        autoPurchasePrice,
        estimatedYearlyIncome,
        estimatedCreditScore,
      } = req;
      const purchasePriceTooHigh =
        +autoPurchasePrice > +estimatedYearlyIncome / 5;
      if (+autoPurchasePrice > 1000000) {
        reject(new Error("400 BAD REQUEST"));
      }

      if (estimatedCreditScore < 600 || purchasePriceTooHigh) {
        resolve({
          ...responseObject,
          status: 403,
          message:
            "DISQUALIFIED - Duis mollis commodo eros, eget sodales velit porttitor vitae. Maecenas consectetur enim quis sapien interdum mollis. Aenean lectus orci, maximus ac finibus ac, porttitor vel risus.",
        });
      }

      resolve({
        ...responseObject,
      });
    }, timeout);
  });
};

const emailValidator = (email: string) => {
  //regex shamelessy borrowed from  - https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regExp.test(email.toLowerCase());
};

const passwordValidator = (password: string) => {
  // regex shamelessly learned in Edwin Diaz's Udemy course "Learn to use Regular Expressions (Regex) in all programming languages and tools the easy way with Edwin Diaz"
  // (slightly edited)
  // uses look-ahead to check for at least one lowercase letter,
  // digit and selection of symbols, white spaces are excluded as well - length min of 8 chars, max of 20
  const regExp = /^(?=.*[a-z])((?=.*\d)|(?=.*[!@#$%^&*\-\\]))\S{8,20}$/g;
  return regExp.test(password);
};

export { mockFetchCall, emailValidator, passwordValidator };
