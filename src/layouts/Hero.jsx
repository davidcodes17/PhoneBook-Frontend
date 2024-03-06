import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Box mt={{lg : 50, md : 50, sm : 10, base : 10}}>
      <Flex
        alignItems={"center"}
        justifyContent={{
          lg: "space-between",
          md: "space-between",
          sm: "center",
          base: "center",
        }}
        flexWrap={{ lg: "nowrap", md: "nowrap", sm: "wrap", base: "wrap" }}
      >
        <Box width={{ lg: "600px", md: "600px", sm: "100%", base: "100%" }}>
          <Heading
            fontSize={{ lg: "80px", md: "70px", sm: "60px", base: "40px" }}
          >
            The best way to store your contacts
          </Heading>
          <Text fontSize={12}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
            velit. Laudantium vitae omnis ullam ad possimus aliquid itaque quam
            officia officiis error, at architecto minima libero ducimus placeat
            totam consectetur.
          </Text>
          <Flex py={5} gap={5}>
            <Button
              bg={"none"}
              border={"2px solid #994636"}
              _hover={"none"}
              width={100}
              as={Link}
              to={"/signin"}
            >
              Sign In
            </Button>
            <Button
              bg={"#994636"}
              color={"#eaf4d3"}
              _hover={"none"}
              width={100}
              as={Link}
              to={"/signup"}
            >
              Sign Up
            </Button>
          </Flex>
        </Box>
        <Image
          src="/mock (2).png"
          display={{ lg: "block", md: "block", sm: "block", base: "block" }}
          width={{ lg: "50%", md: "50%", sm: "90%", base: "100%" }}
          transform={{
            lg: "translateX(120px)",
            md: "translateX(120px)",
            sm: "translateX(50px)",
            base: "translateX(20px)",
          }}
        />
      </Flex>
    </Box>
  );
};

export default Hero;
