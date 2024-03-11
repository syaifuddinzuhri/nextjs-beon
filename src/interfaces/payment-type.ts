import { FormError, MutationProps, PaginationParams } from "./common";

export interface PaymentTypeParams extends PaginationParams {
  keyword?: string;
  type?: string | null;
}

export interface PaymentTypeResponse {
  id: number;
  name: string;
  type: string;
  nominal: number;
}

export interface PaymentTypeData {
  name: string;
  type: string;
  nominal: number;
}

export interface PaymentTypeDeleteMutation {
  id: number;
}

export interface PaymentTypeMutation<T> extends MutationProps<T>, PaymentTypeData { }

export interface PaymentTypeEditMutation<T> extends MutationProps<T>, PaymentTypeData {
  id: number;
}
