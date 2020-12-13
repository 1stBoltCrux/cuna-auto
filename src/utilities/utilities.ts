import { LoanRequest } from "../interfaces/interfaces";

const timeout = 500;

const mockFetchCall = (req: LoanRequest) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return "OK 200";
    }, timeout);
  });
};

export { mockFetchCall };
