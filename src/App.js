import React from "react";
import Header from "./components/Header";
import Home from "./screens/Home";
import Create from "./screens/Create";
import Explore from "./screens/Explore";
import About from "./screens/About";
import RippleLink from "./screens/RippleLink";
import NotFound from "./screens/NotFound";
import { ThemeProvider, CSSReset, theme } from "@chakra-ui/core";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

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
    mono: "Open Sans, monospace",
  },
};

function App() {
  return (
    <Router>
      <div class="App d-flex flex-column mx-3">
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
        <div class="flex-grow-1">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/explore" component={Explore}/>
            <Route path="/about">
              <About />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route
              path="/ripplits/:linkID"
              render={props => <RippleLink key={props.match.params.linkID} />}
            />
            <Route exact path="/404">
              <NotFound />
            </Route>
            <Redirect from='*' to='/404' />
          </Switch>
          </div>
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
