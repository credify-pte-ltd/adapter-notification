import React, { useContext } from "react";

export interface AppContextData {
  commonData: any;
  setCommonData: (commonData: string) => void;
}

export const AppContext = React.createContext<AppContextData>({
  commonData: {},
  setCommonData: (commonData: any) => {},
});

export const useEKYCContext = () => {
  return useContext(AppContext);
};

export const AppContextProvider = AppContext.Provider;
