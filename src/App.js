import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import { ThemeProvider, CSSReset, theme } from "@chakra-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

const breakpoints = ["360px", "768px", "1024px", "1440px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const newTheme = {
  ...theme,
  breakpoints,
  fonts: {
    body: "Open Sans, sans-serif",
    heading: "Open Sans, serif",
    mono: "Open Sans, monospace"
  }
};

function App() {
  return (
    <Router>
      <div className="App">
        <ThemeProvider theme={newTheme}>
          <CSSReset />
          <Header headerItems={["Home", "Explore", "About"]} />
          <Card background="#efefef" width="300px" height="300px">
            <div>hi</div>
            <div>This is an example of what a card looks like</div>
          </Card>
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
