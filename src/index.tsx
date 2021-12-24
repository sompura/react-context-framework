import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";

import getRuntimeConfig from "./config";
import AppContextProvider from "./contexts";
import apolloClient from "./apollo";
import App from "./App";

const config = getRuntimeConfig();

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <BrowserRouter>
      <AppContextProvider config={config}>
        <App />
      </AppContextProvider>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
);
