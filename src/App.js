import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Home from "./screens/Home";
import { ThemeProvider, CSSReset, theme } from "@chakra-ui/core";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
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
          {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/explore"></Route>
            <Route path="/about">
              <div>
                <Card background="#efefef" width="300px" height="300px">
                  <div>hi</div>
                  <div>This is an example of what a card looks like</div>
                </Card>
              </div>
            </Route>
          </Switch>
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
