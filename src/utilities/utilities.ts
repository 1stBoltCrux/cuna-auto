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
        resolve({
          status: 400,
          message: "400 - Bad Request",
        });
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

export { mockFetchCall };
