import React from "react";
import { Box, Flex, Text, Heading } from "@chakra-ui/core";
import Card from "../components/Card";

import "./About.css";

export default function About(props) {
  return (
    <Flex className="about justify-content-center">
      <div className="container">
        <div className="row justify-content-center">
          <Flex className="my-5" width={{ md: "75%", lg: "75%" }}>
            <Box width="40%">
              <Heading className="header col" size="2xl" textAlign="left">
                <div className="pt-4">
                  About <br /> Us
                </div>
              </Heading>
            </Box>
            <Card className="description p-4 col" textAlign="left">
              <Text
                className="description-heading"
                fontWeight="bold"
                fontSize="lg"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                feugiat dignissim augue eget viverra. Integer ligula dolor,
                tincidunt vel eros eget, ultrices rhoncus quam. Orci.
              </Text>
              <Text className="description-details mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                feugiat dignissim augue eget viverra. Integer ligula dolor,
                tincidunt vel eros eget, ultrices rhoncus quam. Orci.
              </Text>
            </Card>
          </Flex>
        </div>
        <div className="row">
          <Card
            className="faq d-flex justify-content-center"
            background="rgba(255, 247, 167, 0.8)"
            textAlign="left"
          >
            <Box className="my-5" width={{ md: "75%", lg: "75%" }}>
              <Heading className="mt-3" fontWeight="light">
                Frequently Asked Questions
              </Heading>
              <Text className="faq-question mt-4 mb-3">What is rippl.it?</Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                feugiat dignissim augue eget viverra. Integer ligula dolor,
                tincidunt vel eros eget, ultrices rhoncus quam. Orci.
              </Text>
              <Text className="faq-question mt-4 mb-3">
                What is another question?
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                feugiat dignissim augue eget viverra. Integer ligula dolor,
                tincidunt vel eros eget, ultrices rhoncus quam. Orci.
              </Text>
              <Text className="faq-question mt-4 mb-3">
                What is another question?
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                feugiat dignissim augue eget viverra. Integer ligula dolor,
                tincidunt vel eros eget, ultrices rhoncus quam. Orci.
              </Text>
              <Text className="faq-question mt-4 mb-3">
                What is another question?
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                feugiat dignissim augue eget viverra. Integer ligula dolor,
                tincidunt vel eros eget, ultrices rhoncus quam. Orci.
              </Text>
            </Box>
          </Card>
        </div>
      </div>
    </Flex>
  );
}
