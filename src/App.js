import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Box } from "@chakra-ui/react";

import Home from "./Main/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Box as="main">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Box>
    </BrowserRouter>
  );
};

export default App;
