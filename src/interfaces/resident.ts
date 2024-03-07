import { FormError, MutationProps, PaginationParams } from "./common";

export interface ResidentValidation {
  name: FormError;
  status: FormError;
  phone: FormError;
  is_married: FormError;
  id_card_photo: FormError;
}

export interface ResidentParams extends PaginationParams {
  keyword?: string;
}

export interface ResidentResponse {
  id: number;
  name: number;
  id_card_photo?: number;
  phone?: number;
  status: number;
  is_married: number;
  created_at: number;
  updated_at: number;
}

export interface ResidentData {
  name: string;
  phone: string;
  status: string;
  is_married: string;
  id_card_photo: string;
}

export interface ResidentMutation<T> extends MutationProps<T>, ResidentData {}
