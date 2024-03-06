import { Box, Button, Flex, IconButton, Image, Input, Text } from "@chakra-ui/react";
import { ArrowLeft, Edit, Save2, SaveAdd, Trash } from "iconsax-react";
import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Upload from "../../components/Upload";

const EditPage = () => {
  return (
    <Box pt={10}>
      <Flex
        flexWrap={"wrap"}
        gap={10}
        pb={40}
        justifyContent={"space-around"}
        alignItems={"center"}
        pt={{ lg: 10, md: 10, sm: 0, base: 0 }}
      >
        <Flex alignItems={'center'}>
          <Box textAlign={'center'}>
            <Upload />
          </Box>
        </Flex>
        <Box
          p={5}
          fontSize={{ lg: 40, md: 40, sm: 35, base: 25 }}
          textAlign={"center"}
        >
          <Input my={2} width={300} placeholder="Full Name" /> <br />
          <Input my={2} width={300} placeholder="Email Adddress" /> <br />
          <Input my={2} width={300} placeholder="Phone Number" /> <br />
          <Input my={2} width={300} placeholder="Location" /> <br />
          <Input my={2} width={300} placeholder="Website" /> <br />
          <Flex gap={5} py={5} justifyContent={"center"}>
            <IconButton icon={<ArrowLeft />} />
            <Button rightIcon={<SaveAdd />}>Save</Button>
            <IconButton icon={<Trash />} />
          </Flex>
        </Box>
      </Flex>
      <Nav />
    </Box>
  );
};
export default EditPage;
