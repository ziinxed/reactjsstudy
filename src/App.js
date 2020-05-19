import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route exact={true} path="/" component={Home} />
      <Route path="/about">
        <h1>About</h1>
      </Route>
    </HashRouter>
  );
}

export default App;
