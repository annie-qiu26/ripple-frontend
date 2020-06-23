import React from "react";
import { Box } from "@chakra-ui/core";
import "./Card.css";

function Card(props) {
  return (
    <Box
      className="card"
      background={props.background}
      width={props.width}
      height={props.height}
    >
      {props.children}
    </Box>
  );
}

export default Card;
