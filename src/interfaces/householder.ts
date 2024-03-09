import { MutationProps, PaginationParams } from "./common";
import { ResidentResponse } from "./resident";
export interface HousehoulderParams extends PaginationParams {
  keyword?: string;
  house_id?: number;
}
export interface HouseHolderResponse {
  id: number;
  house_id: number;
  resident_id: number;
  is_done: number;
  start_date: Date | null;
  end_date: Date | null;
  created_at: Date | null;
  updated_at: Date | null;
  resident: ResidentResponse | null;
}
export interface HouseholderData {
  status: number;
  house_id: number;
  resident_id: number;
  resident_status: string;
  start_date: string | null;
  end_date?: string | null;
}

export interface HouseholderMutation<T> extends MutationProps<T>, HouseholderData { }

export interface HouseholderEditMutation<T> extends MutationProps<T>, HouseholderData {
  id: number
}
