import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About/";
import Contact from "./pages/Contact/";
import Portfolio from "./pages/Portfolio/";
import Navbar from "./components/Navbar/";
import "./pages/style.css";

function App() {
  return (
    <Router>
      <Navbar/>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
    </Router>
  );
}

export default App;
