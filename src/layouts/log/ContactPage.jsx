import { Box, Button, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import { ArrowLeft, Edit, Trash } from "iconsax-react";
import React from "react";
import Header from "./Header";
import Nav from "./Nav";

const ContactPage = () => {
  return (
    <Box>
      <Flex
        flexWrap={"wrap"}
        gap={10}
        pb={40}
        justifyContent={"space-around"}
        alignItems={"center"}
        pt={{ lg: 10, md: 10, sm: 0, base: 0 }}
      >
        <Flex
        //  justifyContent={"center"}
         >
          <Image
            src="/me.jpg"
            width={{lg : "400px",md : "400px", sm : "100vw",base : "100vw"}}
            borderRadius={{ lg: 100000, md: 1000000, sm: 0, base: 0 }}
            objectFit={"cover"}
            height={"400px"}
          />
        </Flex>
        <Box p={5}  fontSize={{lg : 40, md : 40, sm : 35, base : 25}} textAlign={"center"}>
          <Text>Areegbe David</Text>
          <Text>areegbedavid@gmail.com</Text>
          <Text>+(234) 9015061171</Text>
          <Text>Mowe, Nigeria</Text>
          <Text>areegbe.netlify.app</Text>
          <Flex gap={5} py={5} justifyContent={"center"}>
            <IconButton icon={<ArrowLeft />} />
            <IconButton icon={<Edit />} />
            <IconButton icon={<Trash />} />
          </Flex>
        </Box>
      </Flex>
      <Nav />
    </Box>
  );
};

export default ContactPage;
