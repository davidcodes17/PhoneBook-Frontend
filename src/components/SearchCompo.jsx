import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Button,
  Flex,
  Input,
} from "@chakra-ui/react";
import { ArrowCircleDown } from "iconsax-react";
import React from "react";

const SearchCompo = () => {
  return (
    <Box>
      <Flex
        justifyContent={"center"}
        gap={4}
        px={{ lg: 200, md: 100, sm: 0, base: 0 }}
      >
        <Input placeholder="Search Contacts..." />
        <Menu>
          <MenuButton
            bg={"#994636"}
            color={"#eaf4d3"}
            as={Button}
            _hover={"none"}
            rightIcon={<ArrowCircleDown />}
          ></MenuButton>
          <MenuList>
            <MenuItem>Name</MenuItem>
            <MenuItem>Email</MenuItem>
            <MenuItem>Phone Number</MenuItem>
            <MenuItem>Website</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};

export default SearchCompo;
