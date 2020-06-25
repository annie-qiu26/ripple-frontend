import React from "react";
import Form from "../components/Form";
import { Box, Heading, Flex, Text } from "@chakra-ui/core";
import { Link } from "react-router-dom";
import "./Create.css";

class Create extends React.Component {
  render() {
    return (
      <Flex className="create">
        <Form />
      </Flex>
    );
  }
}

export default Create;
