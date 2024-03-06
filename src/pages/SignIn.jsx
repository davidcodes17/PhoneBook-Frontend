import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <Box>
      <Flex justifyContent={"center"} mt={{lg : "100px", md : "100px", sm : "50px", base : "50px"}}>
        <Box width={{lg : "30vw", md : "40vw", sm : "100vw", base : "100vw"}} px={{lg :0, md : 0, sm : 10, base : 7}}>
          <Heading fontSize={{lg : 50, md : 50, sm : "40px", base : "30px"}}>Welcome Back 👋</Heading>
          <Text>Please fill in your appropriate details⚠️</Text>

          <Box mt={5}>
            <FormControl pt={5}>
              <FormLabel>Email Address</FormLabel>
              <Input
                py={6}
                borderRadius={50}
                type="email"
                placeholder="you@gmail.com"
              />
            </FormControl>
            <FormControl pt={5}>
              <FormLabel>Password</FormLabel>
              <Input
                py={6}
                borderRadius={50}
                type="password"
                placeholder="*********************"
              />
            </FormControl>
            <Link to={"/contacts"}>
            <Button
              width={"100%"}
              mt={5}
              py={7}
              borderRadius={40}
              bg={"#994636"}
              _hover={"none"}
              color={"#eaf4d3"}
              >
              Sign In
            </Button>
              </Link>
            <Text textAlign={"center"} mt={5}>
              <Link to={"/signup"}>Don't have an account? Sign Up</Link>
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default SignIn;
