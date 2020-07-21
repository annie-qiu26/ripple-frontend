import React from "react";
import { Box, Flex, Text, Heading } from "@chakra-ui/core";
import Card from "../components/Card";

import "./About.css";

export default function About(props) {
  return (
    <Flex className="about justify-content-center">
      <div className="container">
        <Box
          className="row my-sm-5"
          width={{ sm: "stretch", md: "88%", lg: "72%" }}
          marginLeft="auto"
          marginRight="auto"
        >
          <Box className="col-sm">
            <Heading
              className="header my-5 my-md-0"
              size="2xl"
              textAlign="left"
            >
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
              By creating a rippl.it to a nonprofit you support, you can now see
              how much impact the simple action of sharing a link on your social
              media can made.
            </Text>
            <Text className="description-details mt-3">
              Not only can you watch the campaign grow as a whole, but you will
              know how much you personally contributed to its success. This
              includes the support gained from the circle you shared it with
              along with support from shares rippling out of your circle - it
              all links back to you.
            </Text>
          </Card>
        </Box>
        <div className="row mx-0">
          <Card
            className="faq d-flex justify-content-center"
            background="rgba(255, 247, 167, 0.8)"
            textAlign="left"
          >
            <Box className="my-sm-5 pb-3 mx-2 mx-md-2">
              <Heading className="mt-3" fontWeight="light">
                Frequently Asked Questions
              </Heading>
              <Text className="faq-question mt-4 mb-3">What is rippl.it?</Text>
              <Text>
                Rippl.it is a platform where you can not only campaign for
                nonprofits, but you can track the support your shares have
                contributed.
              </Text>
              <Text className="faq-question mt-4 mb-3">
                How do I create my own link?
              </Text>
              <Text>
                Go to rippl.it.com/create and fill out the form.
              </Text>
              <Text className="faq-question mt-4 mb-3">
                How do I share my link with others?
              </Text>
              <Text>
              Once your link is generated from rippl.it, simply copy and paste it onto any social media platform or private message.
              </Text>
              <Text className="faq-question mt-4 mb-3">
                Do I need an account to make a rippl.it?
              </Text>
              <Text>No, all you need is an email address.</Text>
            </Box>
          </Card>
        </div>
      </div>
    </Flex>
  );
}
