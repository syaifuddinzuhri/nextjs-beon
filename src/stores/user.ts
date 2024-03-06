/* eslint-disable import/prefer-default-export */
import { create } from "zustand";

import type { Admin } from "@/interfaces/profile";

interface StoreType {
  user?: Admin;
  setUser: (user?: Admin) => void;
}

export const useUserStore = create<StoreType>()(set => ({
  user: undefined,
  setUser: (user?: Admin) => set(state => ({ ...state, user })),
}));
