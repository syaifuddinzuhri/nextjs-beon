import { useMutation, useQuery } from "@tanstack/react-query";

import type { QueryPropsDetail, QueryPropsList, QueryPropsSimpleList, Response } from "@/interfaces/common";
import axios from "@/utils/api/callApi";
import { ResidentMutation, ResidentParams, ResidentResponse } from "@/interfaces/resident";

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

export const useAddResidentMutation = ({ onSuccess, onError, ...rest }: ResidentMutation<Response<any>>) =>
  useMutation<Response<any>>({
    mutationFn: async () => {
      const formData = new FormData();
      Object.keys(rest).forEach((key: any) => {
        if ((rest as any)[key] !== undefined) {
          formData.append(key, (rest as any)[key]);
        }
      });
      return await axios({
        method: "post",
        url: "/resident",
        data: rest,
        headers: { "content-type": "multipart/form-data", accept: "multipart/form-data" },
      });
    },
    onSuccess,
    onError,
  });
