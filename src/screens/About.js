import React from "react";
import { Box, Flex, Text, Heading } from "@chakra-ui/core";
import Card from "../components/Card";

import "./About.css";

export default function About(props) {
  return (
    <Flex className="about">
        <Flex width="96%" mt="5%" mb="5%">
            <Box width="40%">
                <Heading className="header" size="2xl" textAlign="left">About <br />Us</Heading>
            </Box>
            <Box width="50%" textAlign="left">
                <Text className="description" fontWeight="bold" fontSize="lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat dignissim augue eget viverra. Integer ligula dolor, tincidunt vel eros eget, ultrices rhoncus quam. Orci.
                </Text>
                <Text className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat dignissim augue eget viverra. Integer ligula dolor, tincidunt vel eros eget, ultrices rhoncus quam. Orci.
                </Text>
            </Box>
        </Flex>
        <Card background="rgba(255, 247, 167, 0.8)" width="96%" padding="5% 15% 5% 15%" textAlign="left">
            <Text fontSize="40px">Frequently Asked Questions</Text>
            <Text className="faq-question">What is rippl.it?</Text>
            <Text>Lorem ipsum dolor</Text>
            <Text className="faq-question">What is another question?</Text>
            <Text>Lorem ipsum dolor</Text>
        </Card>
    </Flex>
  );
}