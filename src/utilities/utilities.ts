import { LoanRequest } from "../interfaces/interfaces";
import { timeout } from "../constants/constants";

const mockFetchCall = (req: LoanRequest) => {
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ok 200");
    }, timeout);
  });
};

export { mockFetchCall };
