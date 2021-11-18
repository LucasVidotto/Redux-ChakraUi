import React from "react";
import { connect } from "react-redux";
import * as actions from "../../Store/Redux/action";
import Forms from "../Form/index";
import {
  Stack,
  Button,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

const Home = ({ count, increaseCount, decrementCount }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Stack isInline p={4} justifyContent="space-between">
      <Stack isInline alignItems="center">
        <Forms />
      </Stack>
      <Button
        mr={4}
        onClick={() => {
          increaseCount();
        }}
        colorScheme={colorMode === "light" ? "green" : "blue"}
      >
        Action +
      </Button>
      <Button
        mr={4}
        onClick={() => {
          decrementCount();
        }}
        colorScheme={colorMode === "light" ? "green" : "blue"}
      >
        Action -
      </Button>
      <Text color={useColorModeValue("yellow.500", "red.300")}>
        Count {count}
      </Text>
      <Button
        onClick={toggleColorMode}
        colorScheme={colorMode === "light" ? "blue" : "green"}
      >
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </Stack>
  );
};

const mapStateToProps = ({ home }) => ({
  count: home.count,
});

const mapDispatchToProps = {
  increaseCount: actions.increaseCount,
  decrementCount: actions.decreCount,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
