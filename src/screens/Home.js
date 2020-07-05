import React from "react";
import ButtonR from "../components/Button";
import { Box, Heading, Flex, Text } from "@chakra-ui/core";
import { Link } from "react-router-dom";
import "./Home.css";


class Home extends React.Component {
  render() {
    return (
      <Flex className="home" width={{ sm: "stretch", md: "36%" }}>
        <div className="home-inner">
          <Heading size="lg" color="#33AAFF">
            rippl.it
          </Heading>
          <Heading size="2xl">Share Your Cause.</Heading>
          <Heading size="2xl" fontWeight="normal">
            See Your Ripple.
          </Heading>
          <Text fontSize="lg">
          Your action of sharing a link to a cause in need makes an impact. 
          With rippl.it, you can now track the generations of support you have helped raise. 
          Watch your ripple grow one share at a time. 

         <br/> <a href= "/about" className= "learn-more"> Learn More </a> 

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

