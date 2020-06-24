import React from "react";
import { Button } from "@chakra-ui/core";
import "./Button.css";

function ButtonR(props) {
  return (
    <Button
      className={props.className || "button"}
      background={props.background}
      width={props.width}
      height={props.height}
      marginTop={props.marginTop}
    >
      {props.children}
    </Button>
  );
}

export default ButtonR;
