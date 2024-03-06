import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const UserCompo = () => {
  return (
    <Flex alignItems={'center'} gap={3}>
        <Image src='/me.jpg' width={'40px'} borderRadius={40} objectFit={'cover'} height={'40px'} />
        <Box display={{lg: "block", md : "block", sm : "none", base : "none"}}>
            <Text fontSize={12}>areegbedavid@gmail.com</Text>
            <Text fontSize={10}>Mowe, Nigeria</Text>
        </Box>
    </Flex>
  )
}

export default UserCompo