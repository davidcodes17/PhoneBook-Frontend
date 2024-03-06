import { Box, Button, CloseButton, Flex, Text } from "@chakra-ui/react";
import { HambergerMenu } from "iconsax-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [dis, setDis] = useState("none");
  return (
    <Box>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Text fontSize={20}>Phone Book</Text>
        <Flex
          display={{ lg: "flex", md: "flex", sm: "none", base: "none" }}
          gap={10}
        >
          <Button
            bg={"none"}
            border={"2px solid #994636"}
            _hover={"none"}
            as={Link}
            to={"/signin"}
            width={100}
          >
            Sign In
          </Button>
          <Button
            as={Link}
            to={"/signup"}
            bg={"#994636"}
            color={"#eaf4d3"}
            _hover={"none"}
            width={100}
          >
            Sign Up
          </Button>
        </Flex>
        <Box
          display={{ lg: "none", md: "none", sm: "block", base: "block" }}
          cursor={"pointer"}
          onClick={() => {
            setDis("block");
          }}
        >
          <HambergerMenu size={40} />
        </Box>
      </Flex>
      <Box
        width={"100vw"}
        height={"100vh"}
        pos={"fixed"}
        bg={"#eaf4d3"}
        zIndex={99}
        top={0}
        left={0}
        display={dis}
        px={10}
        py={10}
      >
        <Flex justifyContent={"space-between"} mb={10} alignItems={"center"}>
          <Text fontSize={20}>Phone Book</Text>
          <CloseButton
            onClick={() => {
              setDis("none");
            }}
          />
        </Flex>
        <Button
          bg={"none"}
          border={"2px solid #994636"}
          _hover={"none"}
          as={Link}
          to={"/signin"}
          width={"100%"}
          mb={5}
        >
          Sign In
        </Button>
        <Button
          bg={"#994636"}
          as={Link}
          to={"/signup"}
          color={"#eaf4d3"}
          _hover={"none"}
          width={"100%"}
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
