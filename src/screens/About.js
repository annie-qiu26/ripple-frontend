import React from "react";
import { Box, Flex, Text, Heading } from "@chakra-ui/core";
import Card from "../components/Card";

import "./About.css";

export default function About(props) {
  return (
    <Flex className="about justify-content-center">
      <div className="container">
          <Box className="row my-sm-5" width={{sm: "stretch", md: "88%", lg: "72%"}} marginLeft="auto" marginRight="auto">
            <Box className="col-sm">
              <Heading className="header my-5 my-md-0" size="2xl" textAlign="left">
                <div className="pt-4">
                  About <br /> Us
                </div>
              </Heading>
            </Box>
            <Card className="description p-4 col-sm" textAlign="left">
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
          </Box>
        <div className="row mx-0">
          <Card
            className="faq d-flex justify-content-center"
            background="rgba(255, 247, 167, 0.8)"
            textAlign="left"
          >
            <Box className="my-sm-5 pb-3 mx-2">
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
