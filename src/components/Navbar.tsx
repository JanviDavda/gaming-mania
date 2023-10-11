import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import ColorModeToggle from "./ColorModeToggle";

const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"} padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <ColorModeToggle />
    </HStack>
  );
};

export default Navbar;
