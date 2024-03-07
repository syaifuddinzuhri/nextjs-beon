import { useMutation, useQuery } from "@tanstack/react-query";

import type {
  MutationProps,
  QueryPropsDetail,
  QueryPropsList,
  QueryPropsSimpleList,
  Response,
} from "@/interfaces/common";
import axios from "@/utils/api/callApi";
import {
  ResidentDeleteMutation,
  ResidentEditMutation,
  ResidentMutation,
  ResidentParams,
  ResidentResponse,
} from "@/interfaces/resident";
import { AxiosError } from "axios";

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

export const useEditResidentMutation = ({ id, onSuccess, onError, ...rest }: ResidentEditMutation<Response<any>>) =>
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
        url: `/resident/${id}?_method=PUT`,
        data: rest,
        headers: { "content-type": "multipart/form-data", accept: "multipart/form-data" },
      });
    },
    onSuccess,
    onError,
  });

export const useDeleteResidentMutation = ({
  onSuccess,
  onError,
}: MutationProps<QueryPropsDetail<boolean>, AxiosError, ResidentDeleteMutation>) => {
  return useMutation<QueryPropsDetail<boolean>, AxiosError, ResidentDeleteMutation>({
    mutationFn: async ({ ...data }: ResidentDeleteMutation) =>
      await axios({
        method: "delete",
        url: `/resident/${data.id}`,
      }),

    onSuccess,
    onError,
  });
};

export const useResidentDetailQuery = (id: number, enabled?: boolean) =>
  useQuery<QueryPropsDetail<ResidentResponse>, Error>({
    queryKey: ["resident-detail"],
    queryFn: () =>
      axios<QueryPropsDetail<ResidentResponse>>({
        method: "get",
        url: `/resident/${id}`,
      }),
    enabled,
  });
