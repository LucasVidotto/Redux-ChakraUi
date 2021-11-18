import React from "react";
import ReactDOM from "react-dom";

import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider as ReduxProvider } from "react-redux";

import theme from "./theme";
import store from "./Store";

import App from "./App";

const queryClient = new QueryClient({
  defaultConfig: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </QueryClientProvider>
    </ReduxProvider>
  </ChakraProvider>,
  document.getElementById("root")
);