import React from 'react';
import { Flex, Text } from "@chakra-ui/core";

export default function NotFound(props) {
  return (
     <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="left"
      height="80%"
    >
      <Text fontWeight="bold" marginLeft="12px">
        Not found
      </Text>
    </Flex>
  );
}