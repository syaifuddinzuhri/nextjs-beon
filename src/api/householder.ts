import { useMutation, useQuery } from "@tanstack/react-query";

import type {
  QueryPropsList,
  Response,
} from "@/interfaces/common";
import axios from "@/utils/api/callApi";
import { HouseHolderResponse, HouseholderEditMutation, HouseholderMutation, HousehoulderParams } from "@/interfaces/householder";

export const useHousehoulderQuery = (params?: HousehoulderParams, enabled?: boolean) =>
  useQuery<QueryPropsList<HouseHolderResponse>, Error>({
    queryKey: ["househoulders"],
    queryFn: () =>
      axios<QueryPropsList<HouseHolderResponse>>({
        method: "get",
        url: `/householder`,
        params,
      }),
    enabled,
  });


export const useAddHouseholderMutation = ({ onSuccess, onError, ...rest }: HouseholderMutation<Response<any>>) =>
  useMutation<Response<any>>({
    mutationFn: async () => {
      return await axios({
        method: "post",
        url: "/householder",
        data: rest,
      });
    },
    onSuccess,
    onError,
  });
