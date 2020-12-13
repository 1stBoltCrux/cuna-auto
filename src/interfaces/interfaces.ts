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

interface NewAccountErrors {
    username: string,
    password: string,
    repeatPassword: string,
}

interface MockResponse {
    status: number;
    message: string;
}

interface User {
    password: string;
    username: string;
}

export type {
    User,
    LoanRequest,
    Errors,
    MockResponse,
    NewAccountErrors
}