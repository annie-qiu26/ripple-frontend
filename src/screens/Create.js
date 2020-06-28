import React from "react";
import Form from "../components/Form";
import { Box, Heading, Flex, Text } from "@chakra-ui/core";
import { Link } from "react-router-dom";
import "./Create.css";

class Create extends React.Component {
  render() {
    return (
      <Flex className="create" width={{ md: "stretch", lg: "768px", xl: "768px"}}>
        <Heading margin="40px 0px 40px 0px">Hi there! Cute greeting to make this form more friendly.</Heading>
        <Form />
      </Flex>
    );
  }
}

export default Create;
