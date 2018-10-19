import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard/Dashboard";
import AddNew from "./components/AddNew/AddNew";
import ListItem from "./components/ListItem/ListItem";

export default (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/addnew" component={AddNew} />
    <Route path="/item/:id" component={ListItem} />
    <Route
      path="*"
      render={() => (
        <div className="redirectPage">
          <h1>404</h1>
        </div>
      )}
    />
  </Switch>
);
