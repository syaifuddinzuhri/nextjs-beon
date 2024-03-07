import { useMutation } from "@tanstack/react-query";

import type { LoginMutation, LoginResponse, LogoutMutation, LogoutResponse } from "@/interfaces/auth";
import axios from "@/utils/api/callApi";

export const useLoginMutation = ({ onSuccess, onError, ...rest }: LoginMutation<LoginResponse>) =>
  useMutation<LoginResponse>({
    mutationFn: async () =>
      await axios({
        method: "post",
        url: "/auth/login",
        data: rest,
      }),

    onSuccess,
    onError,
  });
