import React, { useState } from "react";
import { Text } from "@chakra-ui/core";
import Card from "./Card";
import "./RippleCard.css";

function RippleCard(props) {
  const [flipped, setFlipped] = useState(false);

  const flipCard = () => {
    setFlipped(!flipped);
  };

  return (
    <Card
      className="scene scene--ripple-card m-2"
      width={{ sm: "stretch", md: "200px" }}
      as="button"
      onClick={flipCard}
    >
      <div class={flipped ? "ripple-card is-flipped" : "ripple-card"}>
        <div class="card__face card__face--front d-flex justify-content-center align-items-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`ripplits/${props.rootId}`}
          >
            <Text fontWeight="bold">{props.title}</Text>
          </a>
        </div>
        <div class="card__face card__face--back p-2 d-flex justify-content-center align-items-center">
          <Text>Some cool text about ripplit</Text>
        </div>
      </div>
    </Card>
  );
}

export default RippleCard;
