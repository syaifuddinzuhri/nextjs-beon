import { ResidentResponse } from "./resident";

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
