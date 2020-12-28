import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./src/styles/theme";

export const wrapPageElement = ({ element }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      {element}
    </ChakraProvider>
  );
};
