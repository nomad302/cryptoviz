import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import AppLayout from "./AppLayout";
import NavBar from "./NavBar";
import DashBoard from "./Dashboard";
import News from "./News";
import ChartDashBoard from "./ChartDashBoard";
import history from "../history";

const App = () => {
  return (
    <Router history={history}>
      <AppLayout>
        <NavBar />
        <Switch>
          <Route path="/" exact component={DashBoard} />
          <Route path="/news" exact component={News} />
          <Route path="/coindetail/:name" exact component={ChartDashBoard} />
        </Switch>
      </AppLayout>
    </Router>
  );
};

export default App;
