import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";

const WaterMark = (props) => {
  return (
    <Box overflow={"hidden"} position={'fixed'} opacity={'0.5'} zIndex={'-1'} my={props.margin} >
      <Flex>
        <Heading className="phone">PHONEBOOK</Heading>
        <Heading className="phone">PHONEBOOK</Heading>
        <Heading className="phone">PHONEBOOK</Heading>
        <Heading className="phone">PHONEBOOK</Heading>
        <Heading className="phone">PHONEBOOK</Heading>
        <Heading className="phone">PHONEBOOK</Heading>
        <Heading className="phone">PHONEBOOK</Heading>
      </Flex>
      <Flex>
        <Heading className="phone">PHONEBOOK</Heading>
        <Heading className="phone">PHONEBOOK</Heading>
        <Heading className="phone">PHONEBOOK</Heading>
        <Heading className="phone">PHONEBOOK</Heading>
        <Heading className="phone">PHONEBOOK</Heading>
        <Heading className="phone">PHONEBOOK</Heading>
        <Heading className="phone">PHONEBOOK</Heading>
      </Flex>
    </Box>
  );
};

export default WaterMark;
