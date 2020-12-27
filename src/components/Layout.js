import { Box, Grid } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";
import Hero from "./Hero";

const Layout = ({ children }) => {
  return (
    <Box>
      <Grid
        placeItems="center"
        background="startup.100"
        height="60vh"
        w="100vw"
      >
        <Hero />
      </Grid>
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
