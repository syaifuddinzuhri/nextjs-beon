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
  status?: string | null;
}

export interface ResidentResponse {
  id: number;
  name: string;
  id_card_photo?: string;
  phone?: string;
  status: string;
  is_married: string | number;
}

export interface ResidentData {
  name: string;
  phone: string;
  status: string;
  is_married: string;
  id_card_photo: File | null;
}

export interface ResidentDeleteMutation {
  id: number;
}

export interface ResidentMutation<T> extends MutationProps<T>, ResidentData { }

export interface ResidentEditMutation<T> extends MutationProps<T>, ResidentData {
  id: number;
}
