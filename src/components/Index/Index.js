import React from "react";
// react router import
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// component import
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Home } from "../Home/Home";
import { About } from "../About/About";
import { Services } from "../Services/Services";
import { Contact } from "../Contact/Contact";
import { NotFound } from "../NotFound/NotFound";
import { SingleCardDetails } from "../SingleCardDetails/SingleCardDetails";

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
        <Route exact path="/services">
          <Services />
        </Route>
        <Route path="/services/:id">
          <SingleCardDetails />
        </Route>
        <Route path="/book-class">
          <Contact />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};
