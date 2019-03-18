import React, { Fragment, } from 'react';
import { Route, Switch, } from "react-router-dom";
import Home from "./components/Home";
import About from "./pages/About";
import NoMatch from "./components/NoMatch";
import Navbar from "./components/Navbar";
import Flash from "./components/Flash";
import { Container, } from "semantic-ui-react";

const App = () => (
  <Fragment>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" pages={About} />
        <Route exact path="/flash" component={Flash} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
)

export default App;