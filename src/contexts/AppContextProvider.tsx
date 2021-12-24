import React from "react";

import HomeViewDataContextProvider from "./HomeViewDataContext";

/**
 * Implement all the different context provider here, they will be passed to the application
 */
const AppContextProvider = ({ config, ...props }: any) => {
  return <HomeViewDataContextProvider {...props}></HomeViewDataContextProvider>;
};

export default AppContextProvider;
