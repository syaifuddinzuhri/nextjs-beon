import type { FC, ReactNode } from "react";
import React, { createContext, useContext } from "react";

import type { UserInterface } from "../auth-types";
import { getUser } from "../utils/helpers";

interface AuthProvider extends UserInterface {
  children: ReactNode;
}

type AuthContextType = UserInterface | null;

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider: FC<AuthProvider> = ({ children }) => {
  return <AuthContext.Provider value={{ ...getUser() }}>{children}</AuthContext.Provider>;
};

export const useAuthProvider = (): AuthContextType => useContext(AuthContext);
