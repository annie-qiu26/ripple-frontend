import React from "react";
import { Box, Heading, Text } from "@chakra-ui/core";
import Card from "./Card";
import "./RippleStatCard.css";

function RippleStatCard(props) {
  return (
    <Card
      background="#F6F5FD"
      width="100%"
      margin="24px 0px 24px 0px"
      padding="24px"
      maxWidth="280px"
      minHeight="120px"
      textAlign="center"
    >
      <Heading>{props.stat}</Heading>
      <Text>{props.field}</Text>
    </Card>
  );
}

export default RippleStatCard;
