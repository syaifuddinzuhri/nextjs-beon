import { FormError, MutationProps, PaginationParams } from "./common";
import { HouseHolderResponse } from "./householder";
import { PaymentTypeResponse } from "./payment-type";
import { ResidentResponse } from "./resident";

export interface PaymentParams extends PaginationParams {
  keyword?: string;
  type?: string;
}

export interface PaymentResponse {
  id: number;
  hosueholder_id?: number | null;
  resident_id?: number | null;
  payment_type_id?: number | null;
  date?: string | null;
  year?: number | null;
  month?: number | null;
  payment_type?: PaymentTypeResponse | null;
  householder?: HouseHolderResponse | null;
  resident?: ResidentResponse | null;
  nominal?: number | null;
}

export interface Month {
  month: number;
  year: number;
}

export interface PaymentData {
  payment_type_id: number | null;
  nominal: number | null;
}

export interface PaymentDataIncome extends PaymentData {
  resident_id: number | null;
  months: Month[] | null;
}

export interface PaymentDataSpending extends PaymentData {
  date: string | null;
  month: number | null;
  year: number | null;
  type: string | null;
}

export interface PaymentDeleteMutation {
  id: number;
}

export interface PaymentMutation<T> extends MutationProps<T>, PaymentData { }
export interface PaymentIncomeMutation<T> extends MutationProps<T>, PaymentDataIncome { }
export interface PaymentSpendingMutation<T> extends MutationProps<T>, PaymentDataSpending { }

export interface PaymentEditMutation<T> extends MutationProps<T>, PaymentData {
  id: number;
}
