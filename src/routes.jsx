import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { CostumerInformation } from "./pages/costumer-information";

import { FinalPage } from "./pages/final-page";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/costumer-information"
          component={CostumerInformation}
        />

        <Route exact path="/final-page" component={FinalPage} />
      </Switch>
    </Router>
  );
}

export default Routes;
