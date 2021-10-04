import React from "react";
// react router import
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// context import
import { Context } from "../../App";

// component import
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Home } from "../Home/Home";
import { About } from "../About/About";
import { Services } from "../Services/Services";
import { Contact } from "../Contact/Contact";
import { NotFound } from "../NotFound/NotFound";

export const Index = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/services/:id"></Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};
