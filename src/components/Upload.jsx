import { Box, Flex, Image, Input } from "@chakra-ui/react";
import React from "react";

const Upload = () => {
  return (
    <Box>
      <Flex
        justifyContent={"center"}
        bgSize={"cover"}
        borderRadius={4000}
        cursor={"pointer"}
        bgImage={"/me.jpg"}
      >
        <Box bg={"blackAlpha.800"} className="upload" borderRadius={4000} pos={"relative"}>
          <Flex justifyContent={'center'}>
            <Image
              src="/icons/camera (5).png"
              pos={"absolute"}
              top={"100px"}
            />
          </Flex>
          <Input
            type="file"
            width={300}
            opacity={0}
            cursor={"pointer"}
            height={300}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Upload;
