import { Box, Flex, Heading, HStack, Icon, Text } from "@chakra-ui/react";
import React from "react";
import flag from "../assets/001-south-korea.svg";
import { AiFillHome } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <Box w={{ base: "90%", md: "50%" }} mx="auto">
      <Flex justify="center">
        <img width="200" height="200" src={flag} alt="Flagge" />
      </Flex>
      <HStack mt={-4} spacing="24px" justify="center" align="center">
        <Icon boxSize="2.5em" color="startup.600" as={AiFillHome} />
        <Icon boxSize="2.5em" color="startup.600" as={FaEnvelope} />
      </HStack>
      <Heading mt={6} color="startup.700" textAlign="center" as="h2">
        Mein Koreanisch-Blog
      </Heading>
      <Text color="startup.600" textAlign="center" fontSize="2xl">
        Verfolge meine Fortschritte
      </Text>
    </Box>
  );
};

export default Hero;
