import React, { useState, useEffect } from "react";
import { Flex, Heading, Box } from "@chakra-ui/core";
import { useHistory } from "react-router-dom";
import RippleCard from "../components/RippleCard";

import { listRipples } from "../api/ripple";

import "./Explore.css";

function Explore(props) {
  const [loading, setLoading] = useState(true);
  const [ripples, setRipples] = useState(undefined);
  const history = useHistory();

  useEffect(() => {
    listRipples()
      .then(res => {
        setLoading(false);
        setRipples(res.ripples);
      })
      .catch(err => {
        history.push("/404");
      });
  });

  if (loading) {
    return <div />;
  } else {
    return (
      <Flex
        className="explore justify-content-center text-left my-3"
        height={{ md: "auto", lg: "92%" }}
        margin={{ sm: "auto", lg: "0% 8%", xl: "0% 12%" }}
      >
        <div class="container justify-content-around">
          <Heading className="my-2 ml-2" size="md" color="#33AAFF">
            Trending
          </Heading>
          <Heading className="mb-4 ml-2" size="xl">
            Check out today's most popular ripples!
          </Heading>
          <Box className="row justify-content-around">
            {ripples?.map(ripple => (
              <RippleCard
                key={ripple.root_id}
                rootId={ripple.root_id}
                title={ripple.title}
              />
            ))}
          </Box>
        </div>
      </Flex>
    );
  }
}

export default Explore;
