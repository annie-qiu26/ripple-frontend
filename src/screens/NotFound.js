import React from "react";
import { Image, Flex, Text, Heading } from "@chakra-ui/core";
import ButtonR from "../components/Button";
import { Link } from "react-router-dom";
import mascot from "../assets/mascot.png";

import "./NotFound.css";

export default function NotFound(props) {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="left"
      height="92%"
      className="container"
      maxWidth="600px"
    >
      <Image src={mascot} className="mb-3" alt="mascot image" />
      <Heading fontWeight="bold" className="my-3">
        Oops! Page Not Found.
      </Heading>
      <Text fontSize="xl">
        Exploring is fun, but beware of dangerous waters. Ask your friend again
        for the correct rippl link, so you can safely swim to the correct page.
      </Text>
      <Link to={`/home`}>
        <ButtonR className="home-start-button" justifyContent="left">
          Navigate to home
        </ButtonR>
      </Link>
    </Flex>
  );
}
