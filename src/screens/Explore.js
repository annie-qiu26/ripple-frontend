import React, { useState, useEffect, useRef } from "react";
import { Flex, Heading, Box, Input, IconButton } from "@chakra-ui/core";
import { useHistory } from "react-router-dom";
import RippleCard from "../components/RippleCard";

import { listRipples, searchRipples } from "../api/ripple";

import "./Explore.css";

function Explore(props) {
  const [loading, setLoading] = useState(true);
  const [ripples, setRipples] = useState(undefined);
  const [searchError, setSearchError] = useState(false);

  const history = useHistory();
  const searchRef = useRef();

  function handleSearch(e) {
    e.preventDefault();
    const query = searchRef.current.value;
    history.push(`/explore/?q=${query}`);
  }

  const searchInput = () => {
    return (
      <Box className="p-0" width={{ sm: "stetch", md: "32%" }}>
        <form
          className="form d-flex flex-row justify-content-between col"
          onSubmit={handleSearch}
        >
          <Input
            background="#F3F3F3"
            placeholder="Search for ripples"
            borderRadius="32px"
            marginRight="8px"
            id="token"
            ref={searchRef}
          />

          <IconButton
            className="explore-search-button"
            icon="search"
            borderRadius="32px"
            isLoading={false}
            onSubmit={handleSearch}
            type="submit"
          />
        </form>
      </Box>
    );
  };

  useEffect(() => {
    const search = new URLSearchParams(props.location.search);
    const query = search.get("q");

    searchRipples(query || "")
      .then((res) => {
        setLoading(false);
        setRipples(res.ripples);
      })
      .catch(() => {
        history.push("/404");
      });
  });

  if (loading) {
    return <div />;
  } else {
    return (
      <Flex
        className="explore justify-content-center text-left my-3"
        margin={{ sm: "auto", lg: "0% 8%", xl: "0% 12%" }}
      >
        <div class="container">
          <Heading className="mt-4 mb-2" size="sm" color="#33AAFF">
            trending
          </Heading>
          <div className="d-flex justify-content-between row">
            <Heading className="mb-2 col" size="lg">
              Check out today's most popular ripples!
            </Heading>
            {searchInput()}
          </div>
          {ripples?.map((ripple) => (
            <div className="row mt-1">
              <RippleCard
                key={ripple.root_id}
                rootId={ripple.root_id}
                title={ripple.title}
              />
            </div>
          ))}
        </div>
      </Flex>
    );
  }
}

export default Explore;
