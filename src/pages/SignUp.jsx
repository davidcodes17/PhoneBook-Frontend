import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import WaterMark from "../components/WaterMark";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <Flex>
      <Box>
        <Image
          src="/img.jpg"
          width={"80vw"}
          height={"100vh"}
          display={{lg : "block", md : "block", sm : "none", base : 'none'}}
          objectFit={"cover"}
        />
      </Box>
      <Box  px={{lg : 20, md : 20, sm : 10, base : 5}} py={10}>
        <Heading>Hello There👋</Heading>
        <Text>Plese fill your appropriate details</Text>
        <Box>
          <FormControl isRequired pt={5}>
            <FormLabel>Username</FormLabel>
            <Input width={{lg : 400, md : 400, sm : "100%", base : "100%"}} type="email" />
          </FormControl>
          <FormControl isRequired pt={5}>
            <FormLabel>Email</FormLabel>
            <Input width={{lg : 400, md : 400, sm : "100%", base : "100%"}} type="email" />
          </FormControl>
          <FormControl isRequired pt={5}>
            <FormLabel>Password</FormLabel>
            <Input width={{lg : 400, md : 400, sm : "100%", base : "100%"}} type="password" />
          </FormControl>
          <Link to={"/contacts"}>
          <Button
            width={"full"}
            bg={"#994636"}
            color={"#eaf4d3"}
            _hover={"none"}
            borderRadius={"10px !important"}
            py={6}
            mt={5}
            >
            Sign Up
          </Button>
            </Link>
          <Flex justifyContent={"center"} py={5}>
            <Checkbox colorScheme="orange">
              <Text fontSize={{ lg: 15, md: 12, sm: 12, base: 12 }}>
                I agree and accept all terms and conditions
              </Text>
            </Checkbox>
          </Flex>
          <Text textAlign={"center"}>
            <Link to={"/signin"}>Already have an account? Sign In</Link>
          </Text>

          <Text textAlign={"center"} pt={"35px"}>
            &copy; All Rights Reserved @ Areegbe David
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default SignUp;
