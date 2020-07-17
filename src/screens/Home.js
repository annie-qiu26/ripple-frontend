import React, { useState, useRef } from "react";
import { Input, Heading, Flex, Text, IconButton } from "@chakra-ui/core";
import { Link, useHistory } from "react-router-dom";

import ButtonR from "../components/Button";
import RippleEffect from "../components/RippleEffect";

import "./Home.css";

function Home() {
  const [searchError, setSearchError] = useState(false);

  const history = useHistory();
  const searchRef = useRef();

  function handleSearch(e) {
    e.preventDefault();
    const query = searchRef.current.value;

    if (!query) {
      setSearchError("Your query is empty?");
    } else {
      history.push(`explore/?q=${query}`);
    }
  }

  return (
    <Flex className="home" width={{ sm: "stretch", xl: "40%" }}>
      <RippleEffect/>
      <Flex flexDirection="column">
        <div className="home-text">
          <Heading size="sm" color="#33AAFF">
            rippl.it
          </Heading>
          <Heading size="xl">Share Your Cause.</Heading>
          <Heading size="xl" fontWeight="normal">
            See Your Ripple.
          </Heading>
          <Text fontSize="md">
            Your action of sharing a link to a cause in need makes an impact.
            With rippl.it, you can now track the generations of support you have
            helped raise. Watch your ripple grow one share at a time.
            <br />
            <Link to={`/about`} className="learn-more">
              Learn More
            </Link>
          </Text>
        </div>
        <Flex flexDirection="column" width={{ md: "stretch", lg: "50%" }}>
          <Link to={`/create`}>
            <ButtonR className="home-start-button" justifyContent="left">
              Start a rippl.it
            </ButtonR>
          </Link>
          <form className="form" onSubmit={handleSearch}>
            <div class="d-flex flex-row justify-content-between">
              <Input
                background="#F3F3F3"
                placeholder="Search for ripples"
                borderRadius="32px"
                marginRight="8px"
                id="token"
                ref={searchRef}
              />

              <IconButton
                className="home-search-button"
                icon="search"
                borderRadius="32px"
                isLoading={false}
                type="submit"
              />
            </div>
          </form>
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
