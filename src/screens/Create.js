import React from "react";
import Form from "../components/Form";
import { Heading, Flex } from "@chakra-ui/core";
import "./Create.css";

class Create extends React.Component {
  render() {
    return (
      <Flex className="create" width={{ md: "stretch", lg: "768px"}}>
        <Heading margin="28px 0px 28px 0px">Hi there! Cute greeting to make this form more friendly.</Heading>
        <Form />
      </Flex>
    );
  }
}

export default Create;
