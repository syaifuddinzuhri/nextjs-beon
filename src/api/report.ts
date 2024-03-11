import { useMutation, useQuery } from "@tanstack/react-query";

import type {
  MutationProps,
  QueryPropsDetail,
  QueryPropsList,
  QueryPropsSimpleList,
  Response,
} from "@/interfaces/common";
import axios from "@/utils/api/callApi";
import { AxiosError } from "axios";
import { QueryPropsReportList, ReportParams, ReportResponse, ReportSummaryParams, ReportSummaryResponse } from "@/interfaces/report";

export const useReportQuery = (params?: ReportParams, enabled?: boolean) =>
  useQuery<QueryPropsReportList<ReportResponse>, Error>({
    queryKey: [`reports-${params?.type}`],
    queryFn: () =>
      axios<QueryPropsReportList<ReportResponse>>({
        method: "get",
        url: `/report`,
        params,
      }),
    enabled,
  });

export const useReportSummaryQuery = (params?: ReportSummaryParams, enabled?: boolean) =>
  useQuery<QueryPropsSimpleList<ReportSummaryResponse>, Error>({
    queryKey: [`reports-summary`],
    queryFn: () =>
      axios<QueryPropsSimpleList<ReportSummaryResponse>>({
        method: "get",
        url: `/report/summary`,
        params,
      }),
    enabled,
  });
