import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { Book, LogoutCurve, User } from "iconsax-react";
import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Flex
      justifyContent={"space-between"}
      borderTopRadius={10}
      bg={"#dbd8ae"}
      pos={"fixed"}
      bottom={"0"}
      left={0}
      right={0}
    >
      <Flex justifyContent={"center"} width={"50vw"} p={5}>
        <Box textAlign={"center"} as={Link} to={"/contacts"}>
          <IconButton icon={<Book />} />
          <Text>Contacts</Text>
        </Box>
      </Flex>
      <Flex justifyContent={"center"} width={"50vw"} p={5}>
        <Box textAlign={"center"} as={Link} to={"/profile"}>
          <IconButton icon={<User variant="Bold" />} />
          <Text>Profile</Text>
        </Box>
      </Flex>
      <Flex justifyContent={"center"} width={"50vw"} p={5}>
        <Box textAlign={"center"} as={Link} to={"/signin"}>
          <IconButton icon={<LogoutCurve variant="Bold" />} />
          <Text>Logout</Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Nav;
