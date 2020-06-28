import React from "react";
import Form from "../components/Form";
import { Box, Heading, Flex, Text } from "@chakra-ui/core";
import { Link } from "react-router-dom";
import "./Create.css";

class Create extends React.Component {
  render() {
    return (
      <Flex className="create" width={{ md: "stretch", lg: "64%", xl: "32%"}}>
        <Form />
      </Flex>
    );
  }
}

export default Create;
