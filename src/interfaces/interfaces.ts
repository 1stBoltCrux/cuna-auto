interface LoanRequest {
    autoPurchasePrice: number;
    autoMake: string;
    autoModel: string;
    userEstimatedYearlyIncome: number;
    userEstimatedCreditScore: number;
}

export type {
    LoanRequest
}