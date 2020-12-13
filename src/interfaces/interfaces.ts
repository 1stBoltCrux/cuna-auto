interface LoanRequest {
    autoPurchasePrice: number;
    autoMake: string;
    autoModel: string;
    estimatedYearlyIncome: number;
    estimatedCreditScore: number;
}

interface Errors {
    autoPurchasePrice: string | null,
    autoMake: string | null,
    autoModel: string | null,
    estimatedYearlyIncome: string | null,
    estimatedCreditScore: string | null,
}

export type {
    LoanRequest,
    Errors
}