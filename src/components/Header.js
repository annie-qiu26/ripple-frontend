import React from "react";
import { Text } from "@chakra-ui/core";
import { Link } from "react-router-dom";
import "./Header.css";

const HeaderItem = props => {
  return (
    <Link
      className="header-item nav-item mx-5 px-4"
      to={`/${props.title.toLowerCase()}`}
    >
      <div className="header-textbox">
        <Text fontWeight="bold">{props.title}</Text>
      </div>
    </Link>
  );
};

const Header = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light pt-4">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-center"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav">
          {props.headerItems.map(title => {
            return <HeaderItem key={title} title={title} />;
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
