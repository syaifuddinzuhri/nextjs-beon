import { useMutation, useQuery } from "@tanstack/react-query";

import type { QueryPropsDetail, QueryPropsList, QueryPropsSimpleList, Response } from "@/interfaces/common";
import axios from "@/utils/api/callApi";
import { ResidentParams, ResidentResponse } from "@/interfaces/resident";

export const useResidentQuery = (params?: ResidentParams, enabled?: boolean) =>
  useQuery<QueryPropsList<ResidentResponse>, Error>({
    queryKey: ["residents"],
    queryFn: () =>
      axios<QueryPropsList<ResidentResponse>>({
        method: "get",
        url: `/resident`,
        params,
      }),
    enabled,
  });
