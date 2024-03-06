import { useQuery } from "@tanstack/react-query";

import type { QueryPropsDetail } from "@/interfaces/common";
import type { Admin } from "@/interfaces/profile";
import axios from "@/utils/api/callApi";

export const useProfileQuery = () =>
  useQuery<QueryPropsDetail<Admin>, Error>({
    queryKey: ["admin"],
    queryFn: () =>
      axios<QueryPropsDetail<Admin>>({
        method: "get",
        url: `/auth/me`,
      }),
  });
