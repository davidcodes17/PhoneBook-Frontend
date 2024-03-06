import { Box, Flex, Grid, Heading } from "@chakra-ui/react";
import React from "react";
import Header from "../layouts/log/Header";
import Contact from "../components/Contact";
import SearchCompo from "../components/SearchCompo";
import Nav from "../layouts/log/Nav";

const Contacts = () => {
  return (
    <Box p={5} pb={40}>
      <Header />
      <Heading
        pt={10}
        textAlign={"center"}
        fontSize={{ lg: "100px", md: "80px", sm: 50, base: "40px" }}
        fontWeight={10}
        pb={5}
      >
        Contacts
      </Heading>
      <SearchCompo />
      <Box py={10} pr={5}>
        <Flex flexWrap={"wrap"} gap={10} justifyContent={"center"}>
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
        </Flex>
      </Box>
      <Nav />
    </Box>
  );
};

export default Contacts;
