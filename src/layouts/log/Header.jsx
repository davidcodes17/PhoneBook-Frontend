import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import UserCompo from "../../components/UserCompo";

const Header = () => {
  return (
    <Flex alignItems={"center"} justifyContent={"space-between"}>
      <Heading fontSize={25}>Phonebook</Heading>
      <UserCompo />
    </Flex>
  );
};

export default Header;
