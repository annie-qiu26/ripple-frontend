import React, { useState } from "react";
import { Text, Box } from "@chakra-ui/core";
import Card from "./Card";
import "./RippleCard.css";

function RippleCard(props) {
  return (
    <Card
      className="ripple-card mt-2 p-2 justify-content-around"
      display="flex"
      alignItems="center"
    >
      <div class="row d-flex align-items-center">
        <Box className="col">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`ripplits/${props.rootId}`}
          >
            <Text fontWeight="bold">{props.title}</Text>
          </a>
          </Box>
        <Text className="stat mx-2 col" fontSize="12px">
          {`$${5}`}
          <br />
          raised
        </Text>
        <Text className="stat mx-2 col" fontSize="12px">
          5<br />
          views
        </Text>
        <Text className="stat mx-2 col" fontSize="12px">
          3<br />
          generations
        </Text>
        <Text className="stat mx-2 col" fontSize="12px">
          3<br />
          visitors
        </Text>
        <Text className="stat mx-2 col" fontSize="12px">
          3<br />
          depth
        </Text>
        <Text className="stat mx-2 col" fontSize="12px">
          3<br />
          raised
        </Text>
      </div>
    </Card>
  );
}

export default RippleCard;
