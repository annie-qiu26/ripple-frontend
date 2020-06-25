import React from "react";
import ButtonR from "../components/Button";
import { Box, Heading, Flex, Text } from "@chakra-ui/core";
import { Link } from "react-router-dom";
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <Flex className="home">
        <div className="home-inner">
          <Heading size="lg" color="#33AAFF">
            rippl.it
          </Heading>
          <Heading size="2xl">Share Your Cause.</Heading>
          <Heading size="2xl" fontWeight="normal">
            See Your Ripple.
          </Heading>
          <Text fontSize="lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore.
          </Text>
          <Link to={`/create`}>
            <ButtonR marginTop="20px">Start a Rippl.it</ButtonR>
          </Link>
        </div>
      </Flex>
    );
  }
}

export default Home;
