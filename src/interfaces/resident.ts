import { PaginationParams } from "./common";

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
