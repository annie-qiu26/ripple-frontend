import React from "react";
import { Box, Flex, Text } from "@chakra-ui/core";
import { Link } from "react-router-dom";
import "./Header.css";

const HeaderItem = props => {
  return (
    <li className="header-item">
      <Link to={`/${props.title.toLowerCase()}`}>
        <div className="header-textbox">
          <Text fontWeight="bold">{props.title}</Text>
        </div>
      </Link>
    </li>
  );
};

class Header extends React.Component {
  render() {
    return (
      <ul className="header">
        {this.props.headerItems.map(title => {
          return <HeaderItem key={title} title={title} />;
        })}
      </ul>
    );
  }
}

export default Header;
