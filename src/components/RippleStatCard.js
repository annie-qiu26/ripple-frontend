import React from "react";
import { Heading, Text } from "@chakra-ui/core";
import Card from "./Card";
import "./RippleStatCard.css";

function RippleStatCard(props) {
  return (
    <Card
      background="rgba(237, 242, 247, 0.85)"
      boxShadow="4px 4px 12px rgba(0, 0, 0, 0.1)"
      width="100%"
      display="flex"
      justifyContent="center"
      padding="12px"
      maxWidth={{ sm: "stretch", md: "240px", lg: "196px" }}
      textAlign="center"
      margin="12px 0px"
    >
      <Heading>{props.stat}</Heading>
      <Text>{props.field}</Text>
    </Card>
  );
}

export default RippleStatCard;
