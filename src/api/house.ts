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
import { HouseDeleteMutation, HouseEditMutation, HouseMutation, HouseParams, HouseResponse } from "@/interfaces/house";

export const useHouseQuery = (params?: HouseParams, enabled?: boolean) =>
  useQuery<QueryPropsList<HouseResponse>, Error>({
    queryKey: ["houses"],
    queryFn: () =>
      axios<QueryPropsList<HouseResponse>>({
        method: "get",
        url: `/house`,
        params,
      }),
    enabled,
  });

export const useAddHouseMutation = ({ onSuccess, onError, ...rest }: HouseMutation<Response<any>>) =>
  useMutation<Response<any>>({
    mutationFn: async () => {
      return await axios({
        method: "post",
        url: "/house",
        data: rest,
      });
    },
    onSuccess,
    onError,
  });

export const useEditHouseMutation = ({ id, onSuccess, onError, ...rest }: HouseEditMutation<Response<any>>) =>
  useMutation<Response<any>>({
    mutationFn: async () => {
      return await axios({
        method: "put",
        url: `/house/${id}`,
        data: rest,
      });
    },
    onSuccess,
    onError,
  });

export const useDeleteHouseMutation = ({
  onSuccess,
  onError,
}: MutationProps<QueryPropsDetail<boolean>, AxiosError, HouseDeleteMutation>) => {
  return useMutation<QueryPropsDetail<boolean>, AxiosError, HouseDeleteMutation>({
    mutationFn: async ({ ...data }: HouseDeleteMutation) =>
      await axios({
        method: "delete",
        url: `/house/${data.id}`,
      }),

    onSuccess,
    onError,
  });
};

export const useHouseDetailQuery = (id: number, enabled?: boolean) =>
  useQuery<QueryPropsDetail<HouseResponse>, Error>({
    queryKey: [`house-detail-${id}`],
    queryFn: () =>
      axios<QueryPropsDetail<HouseResponse>>({
        method: "get",
        url: `/house/${id}`,
      }),
    enabled,
  });
