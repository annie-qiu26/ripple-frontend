import React, { useState } from "react";
import { Text, Box } from "@chakra-ui/core";
import Card from "./Card";
import "./RippleCard.css";

function RippleCard(props) {
  console.log('RippleCard', props);
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
            href={`/ripplits/${props.ripple.root_id}`}
          >
            <Text fontWeight="bold">{props.ripple.title}</Text>
          </a>
          </Box>
        <Text className="text-center stat mx-2 col" fontSize="12px">
          {`$${props.ripple.total_raised}`}
          <br />
          raised
        </Text>
        <Text className="text-center stat mx-2 col" fontSize="12px">
          {`${props.ripple.total_views}`}
          <br />
          views
        </Text>
        <Text className="text-center stat mx-2 col" fontSize="12px">
          {`${props.ripple.total_links}`}
          <br />
          visitors
        </Text>
        <Text className="text-center stat mx-2 col" fontSize="12px">
          {`${props.ripple.total_depth}`}
          <br />
          depth
        </Text>
        <Text className="text-center stat mx-2 col" fontSize="12px">
          {`${props.ripple.total_miles}`}
          <br />
          miles
        </Text>
      </div>
    </Card>
  );
}

export default RippleCard;
