import { Box, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import { ArrowLeft, Edit2, Eye, Trash } from "iconsax-react";
import React from "react";

const Contact = () => {
  return (
    <Box>
      <Box
        width={{lg : "250px", md : "250px", sm : "100%", base : "100%"}}
        display={{ lg: "block", md: "block", sm: "flex", base: "flex" }}
        alignItems={"center"}
      >
        <Image
          src="/me.jpg"
          borderTopRadius={{lg : 40, md : 40, sm : 0, base: 0}}
          borderLeftRadius={{ lg: 0, md: 0, sm: 20, base: 20 }}
          width={{ lg: "250px", md: "250px", sm: "250px", base: "250px" }}
          objectFit={"cover"}
          height={{ lg: 200, md: 200, sm: 200, base: "180px" }}
        />
        <Box
          bg={"#994636"}
          textAlign={"center"}
          color={"#eaf4d3"}
          fontSize={{lg : 12, md :12, sm : 12, base : 12}}
          borderBottomRadius={{ lg: 40, md: 40, sm: 0, base: 0 }}
          borderRightRadius={{ lg: 0, md: 0, sm: 20, base: 20 }}
          py={{lg : 6, md : 6, sm : 3, base: "25.5px"}}
          px={{lg : 6, md : 6, sm : 3, base: 3}}
        >
          <Text>Areegbe David Oluwseun</Text>
          <Text>areegbedavid@gmail.com</Text>
          <Text>+2349015061171</Text>
          <Text>areegbe.netlify.app</Text>

          <Flex justifyContent={"center"} gap={5} py={2}>
            <IconButton
              icon={<Eye color="#994636" size={20} variant="Bold" />}
              borderRadius={40}
              _hover={"none"}
              bg={"#eaf4d3"}
            />
            <IconButton
              icon={<Edit2 color="#994636" size={20} variant="Bold" />}
              borderRadius={40}
              _hover={"none"}
              bg={"#eaf4d3"}
            />
            <IconButton
              icon={<Trash color="#994636" size={20} variant="Bold" />}
              borderRadius={40}
              _hover={"none"}
              bg={"#eaf4d3"}
            />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
