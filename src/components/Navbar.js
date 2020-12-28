import React from "react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

const Navbar = () => {
  const { toggleColorMode: toggleMode } = useColorMode();
  const ToggleIcon = useColorModeValue(SunIcon, MoonIcon);
  return (
    <Box>
      <IconButton
        fontSize="30px"
        icon={<ToggleIcon />}
        variant="ghost"
        aria-label="Toggle Theme"
        onClick={toggleMode}
      ></IconButton>
    </Box>
  );
};

export default Navbar;
