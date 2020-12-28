import { Link } from "gatsby";
import { Box, Center, Heading } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";
import Hero from "./Hero";
import { useColorModeValue } from "@chakra-ui/react";

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  const bg100 = useColorModeValue("startup.100", "startup.200");
  const color700 = useColorModeValue("startup.700", "startup.600");
  if (isRootPath) {
    return (
      <Box>
        <Center background={bg100} height="50vh" w="100%">
          <Hero />
        </Center>
        {children}
        <Footer />
      </Box>
    );
  }
  return (
    <Box>
      <Link to="/">
        <Heading mt={6} color={color700} textAlign="center" as="h4">
          Mein Koreanisch-Blog
        </Heading>
      </Link>
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
