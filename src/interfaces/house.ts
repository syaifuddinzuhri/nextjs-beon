import { FormError, MutationProps, PaginationParams } from "./common";
import { HouseHolderResponse } from "./householder";

export interface HouseParams extends PaginationParams {
  keyword?: string;
}

export interface HouseResponse {
  id: number;
  name: string;
  house_number?: string;
  status: number;
  active_householder?: HouseHolderResponse;
  created_at: Date | null;
  updated_at: Date | null;
}

export interface HouseData {
  name: string;
  house_number?: string;
  status?: number;
}

export interface HouseDeleteMutation {
  id: number;
}

export interface HouseMutation<T> extends MutationProps<T>, HouseData {}

export interface HouseEditMutation<T> extends MutationProps<T>, HouseData {
  id: number;
}
