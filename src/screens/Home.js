import React, { useState } from "react";
import ButtonR from "../components/Button";
import { Input, Heading, Flex, Text, IconButton } from "@chakra-ui/core";
import { Link, useHistory } from "react-router-dom";
import "./Home.css";

function Home() {
  const [searchError, setSearchError] = useState(false);

  const history = useHistory();

  function handleSearch() {
    let token = document.getElementById("token").value;
    if (!token) {
      setSearchError("Your token is empty?");
      return;
    }

    history.push(`ripplits/${token}`);
  }

  return (
    <Flex className="home" width={{ sm: "stretch", xl: "36%" }}>
      <Flex flexDirection="column">
        <div className="home-text">
          <Heading size="lg" color="#33AAFF">
            rippl.it
          </Heading>
          <Heading size="2xl">Share Your Cause.</Heading>
          <Heading size="2xl" fontWeight="normal">
            See Your Ripple.
          </Heading>
          <Text fontSize="lg">
            Your action of sharing a link to a cause in need makes an impact.
            With rippl.it, you can now track the generations of support you have
            helped raise. Watch your ripple grow one share at a time.
            <br />
            <Link to={`/about`} className="learn-more">
              Learn More
            </Link>
          </Text>
        </div>
        <Flex
          flexDirection="column"
          width={{ sm: "stretch", md: "64%", xl: "32%" }}
        >
          <Link to={`/create`} width="100%">
            <ButtonR
              margin="24px 0px 24px 0px"
              justifyContent="left"
              padding="16px"
            >
              Start a rippl.it
            </ButtonR>
          </Link>
          <Flex>
            <Input
              background="#F3F3F3"
              placeholder="Your rippl.it token"
              borderRadius="32px"
              width="88%"
              marginRight="12px"
              id="token"
            />

            <IconButton
              icon="search"
              width="auto"
              borderRadius="32px"
              boxShadow="4px 4px 8px rgba(0, 0, 0, 0.1)"
              isLoading={false}
              type="submit"
              onClick={handleSearch}
            />
          </Flex>
        </Flex>
        {searchError && (
          <Text margin="12px 4px 12px 4px" color="tomato">
            Your token is empty? 
          </Text>
        )}
      </Flex>
    </Flex>
  );
}

export default Home;
