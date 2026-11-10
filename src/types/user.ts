interface UserInputs {
    email: string;
    password: string;
}

export type RegistrationInputs = UserInputs;
export type LoginInputs = UserInputs;

export interface User {
    id: number;
    email: string;
}