import React from "react";
import { Button } from "@chakra-ui/core";
import "./Button.css";

function ButtonR(props) {
  return (
    <Button
      className={props.className || "button"}
      borderRadius="32px"
      isLoading={props.isLoading}
      type={props.type}
      {...props}
    >
      {props.children}
    </Button>
  );
}

export default ButtonR;
