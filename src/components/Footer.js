import { Box } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box color="startup.300" textAlign="center">
      {new Date().getFullYear()} Made with{" "}
      <span role="img" aria-label="Herz">
        💚
      </span>{" "}
      by MKT
    </Box>
  );
};

export default Footer;
