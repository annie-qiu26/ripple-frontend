import React from "react";
import { Box, Flex, Text } from "@chakra-ui/core";
import { Link } from "react-router-dom";
import "./Header.css";

const HeaderItem = props => {
  return (
    <Link
      className="header-item"
      mt={{ base: 4, md: 0 }}
      mr={6}
      display="block"
      to={`/${props.title.toLowerCase()}`}
    >
      <div className="header-textbox">
        <Text fontWeight="bold">{props.title}</Text>
      </div>
    </Link>
  );
};

const Header = props => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Flex
      className="header"
      padding="1.5rem"
      bg={{ sm: show ? "#33AAFF" : "white" }}
      {...props}
    >
      <Box
        display={{ sm: "block", md: "none" }}
        marginLeft="auto"
        onClick={handleToggle}
      >
        <svg
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>
      <Box
        className="header-list"
        display={{ sm: show ? "flex" : "none", md: "flex" }}
        width={{ sm: "full", md: "32%" }}
        margin="auto"
      >
        {props.headerItems.map(title => {
          return <HeaderItem key={title} title={title} />;
        })}
      </Box>
    </Flex>
  );
};

export default Header;
