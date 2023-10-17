import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import ColorModeToggle from "./ColorModeToggle";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput />
      <ColorModeToggle />
    </HStack>
  );
};

export default Navbar;
