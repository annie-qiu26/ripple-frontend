import React from "react";
import Form from "../components/Form";
import { Heading, Flex } from "@chakra-ui/core";
import "./Create.css";

class Create extends React.Component {
  render() {
    return (
      <Flex className="create" width={{ md: "stretch", lg: "768px"}}>
        <Heading className="text-left w-100" margin="28px 0px 28px 0px" size="lg">Hi there! You ready to make your first rippl.it?</Heading>
        <Form />
      </Flex>
    );
  }
}

export default Create;
