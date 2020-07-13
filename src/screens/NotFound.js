import React from "react";
import { Box, Image, Flex, Text, Heading } from "@chakra-ui/core";
import ButtonR from "../components/Button";
import { Link } from "react-router-dom";
import mascot from "../assets/mascot.png";

import "./NotFound.css";

export default function NotFound(props) {
  return (
    <Flex
      maxWidth="600px"
      className="not-found container flex-column align-items-center justify-content-center"
    >
      <Box size="sm" height="auto" className="mb-3">
        <Image src={mascot} alt="mascot image" />
      </Box>
      <Heading size="lg" fontWeight="bold" className="my-3">
        Oops! Page Not Found.
      </Heading>
      <Text>
        Exploring is fun, but beware of dangerous waters. Ask your friend again
        for the correct rippl.it link, so you can safely swim to the correct
        page.
      </Text>
      <Link to={`/home`}>
        <ButtonR className="home-start-button" justifyContent="left">
          Navigate to home
        </ButtonR>
      </Link>
    </Flex>
  );
}
