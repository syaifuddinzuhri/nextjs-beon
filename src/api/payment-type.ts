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
import {
  PaymentTypeDeleteMutation,
  PaymentTypeEditMutation,
  PaymentTypeMutation,
  PaymentTypeParams,
  PaymentTypeResponse,
} from "@/interfaces/payment-type";

export const usePaymentTypeQuery = (params?: PaymentTypeParams, enabled?: boolean) =>
  useQuery<QueryPropsList<PaymentTypeResponse>, Error>({
    queryKey: ["payment-types"],
    queryFn: () =>
      axios<QueryPropsList<PaymentTypeResponse>>({
        method: "get",
        url: `/payment-type`,
        params,
      }),
    enabled,
  });

export const useAddPaymentTypeMutation = ({ onSuccess, onError, ...rest }: PaymentTypeMutation<Response<any>>) =>
  useMutation<Response<any>>({
    mutationFn: async () => {
      return await axios({
        method: "post",
        url: "/payment-type",
        data: rest,
      });
    },
    onSuccess,
    onError,
  });

export const useEditPaymentTypeMutation = ({
  id,
  onSuccess,
  onError,
  ...rest
}: PaymentTypeEditMutation<Response<any>>) =>
  useMutation<Response<any>>({
    mutationFn: async () => {
      return await axios({
        method: "put",
        url: `/payment-type/${id}`,
        data: rest,
      });
    },
    onSuccess,
    onError,
  });

export const useDeletePaymentTypeMutation = ({
  onSuccess,
  onError,
}: MutationProps<QueryPropsDetail<boolean>, AxiosError, PaymentTypeDeleteMutation>) => {
  return useMutation<QueryPropsDetail<boolean>, AxiosError, PaymentTypeDeleteMutation>({
    mutationFn: async ({ ...data }: PaymentTypeDeleteMutation) =>
      await axios({
        method: "delete",
        url: `/payment-type/${data.id}`,
      }),

    onSuccess,
    onError,
  });
};

export const usePaymentTypeDetailQuery = (id: number, enabled?: boolean) =>
  useQuery<QueryPropsDetail<PaymentTypeResponse>, Error>({
    queryKey: [`payment-type-detail-${id}`],
    queryFn: () =>
      axios<QueryPropsDetail<PaymentTypeResponse>>({
        method: "get",
        url: `/payment-type/${id}`,
      }),
    enabled,
  });
