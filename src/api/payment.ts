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
import { PaymentIncomeMutation, PaymentMutation, PaymentParams, PaymentResponse, PaymentSpendingMutation } from "@/interfaces/payment";

export const usePaymentQuery = (params?: PaymentParams, enabled?: boolean) =>
  useQuery<QueryPropsList<PaymentResponse>, Error>({
    queryKey: ["payments"],
    queryFn: () =>
      axios<QueryPropsList<PaymentResponse>>({
        method: "get",
        url: `/payment`,
        params,
      }),
    enabled,
  });

export const useAddPaymentIncomeMutation = ({ onSuccess, onError, ...rest }: PaymentIncomeMutation<Response<any>>) =>
  useMutation<Response<any>>({
    mutationFn: async () => {
      return await axios({
        method: "post",
        url: "/payment",
        data: rest,
      });
    },
    onSuccess,
    onError,
  });

export const useAddPaymentSpendingMutation = ({ onSuccess, onError, ...rest }: PaymentSpendingMutation<Response<any>>) =>
  useMutation<Response<any>>({
    mutationFn: async () => {
      return await axios({
        method: "post",
        url: "/payment",
        data: rest,
      });
    },
    onSuccess,
    onError,
  });
