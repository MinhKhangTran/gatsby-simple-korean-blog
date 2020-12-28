import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
} from "@chakra-ui/react";
import React from "react";
import flag from "../assets/001-south-korea.svg";
import { AiFillHome } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "gatsby";
import Navbar from "./Navbar";
import { useColorModeValue } from "@chakra-ui/react";

const Hero = () => {
  const color700 = useColorModeValue("startup.700", "startup.600");
  const color600 = useColorModeValue("startup.600", "startup.600");
  return (
    <Center
      w={{ base: "90%", md: "50%" }}
      height={{ base: "50%", md: "100%" }}
      mx="auto"
      pos="relative"
    >
      <Box pos="absolute" right="0" top="0%">
        <Navbar />
      </Box>
      <Box>
        <Flex justify="center">
          <img width="175" height="175" src={flag} alt="Flagge" />
        </Flex>
        <HStack mt={-2} spacing="20px" justify="center" align="center">
          <Link to="/">
            <Icon boxSize="2em" color={color600} as={AiFillHome} />
          </Link>
          <Icon boxSize="2em" color={color600} as={FaEnvelope} />
        </HStack>
        <Heading mt={4} color={color700} textAlign="center" as="h3">
          Mein Koreanisch-Blog
        </Heading>
        <Text color={color600} textAlign="center" fontSize="xl">
          Verfolge meine Fortschritte
        </Text>
      </Box>
    </Center>
  );
};

export default Hero;
