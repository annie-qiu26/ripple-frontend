import React from "react";
import { Flex } from "@chakra-ui/core";
import "./Explore.css";

import { listRipples } from "../api/ripple";

class Explore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ripples: [],
    }
  }

  componentDidMount() {
    listRipples().then(res => this.setState({ ripples: res.ripples }));
  }

  render() {
    return (
      <Flex className="create" width={{ md: "stretch", lg: "768px", xl: "768px"}}>
        {JSON.stringify(this.state.ripples)}
      </Flex>
    );
  }
}

export default Explore;
