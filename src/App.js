import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header headerItems={["Home", "Explore", "About"]} />
      </div>
    </Router>
  );
}

export default App;
