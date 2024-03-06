import type { FormError, MutationProps } from "./common";

export interface Login {
  email: string;
  password: string;
}

export interface LoginValidation {
  email: FormError;
  password: FormError;
}

export interface LoginMutation<T> extends MutationProps<T>, Login {}

export interface LoginResponse {
  status: boolean;
  message: string;
  data: {
    id: number;
    email: string;
    name: string;
    token: string;
  };
}

export interface LogoutMutation<T> extends MutationProps<T> {}

export interface LogoutResponse {
  status: boolean;
  message: string;
  data: boolean;
}
