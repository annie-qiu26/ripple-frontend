import React, { useState } from "react";
import { Heading, Text } from "@chakra-ui/core";
import Card from "./Card";
import "./RippleStatCard.css";

function RippleStatCard(props) {
  const [flipped, setFlipped] = useState(false);

  const flipCard = () => {
    setFlipped(!flipped);
  };

  return (
    <Card
      width="stretch"
      as="button"
      onClick={flipCard}
      className="scene scene--ripple-stat-card m-2"
    >
      <div class={flipped ? "ripple-stat-card is-flipped" : "ripple-stat-card"}>
        <div class="card__face card__face--front d-flex flex-column justify-content-center align-items-center">
          <Heading>{props.stat}</Heading>
          <Text>{props.field}</Text>
        </div>
        <div class="card__face card__face--back p-2 d-flex justify-content-center align-items-center">
          <Text>{props.description}</Text>
        </div>
      </div>
    </Card>
  );
}

export default RippleStatCard;
