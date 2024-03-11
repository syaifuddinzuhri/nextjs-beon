import { FormError, MutationProps, PaginationParams } from "./common";
import { HouseHolderResponse } from "./householder";
import { PaymentTypeResponse } from "./payment-type";
import { ResidentResponse } from "./resident";

export interface ReportParams extends PaginationParams {
  keyword?: string;
  type?: string;
  month?: number;
  year?: number;
}

export interface ReportSummaryParams {
  year?: number;
}

export interface PaginationList<T> {
  data: T[];
  current_page: number;
  from: number;
  last_page: number;
  per_page: number;
  to: number;
  total: number
}

export interface QueryPropsReportList<T> {
  status: boolean;
  message: string;
  data: {
    sum: number,
    datas: PaginationList<T>
  };
}


export interface ReportResponse {
  id: number,
  householder_id: number | null,
  payment_type_id: number | null,
  resident_id: number | null,
  year: number | null,
  month: number | null,
  nominal: number | null,
  date: string | null,
  type: string | null,
  payment_type: PaymentTypeResponse | null,
  resident: ResidentResponse | null,
  householder: HouseHolderResponse | null
}

export interface SummaryResponse {
  month: number | null,
  year: number | null,
  total_out: number | null,
  total_in: number | null,
  difference: number | null,
}

export interface ReportSummaryResponse {
  year: number | null,
  in: number | null,
  out: number | null,
  diff: number | null,
  datas: SummaryResponse[]
}

