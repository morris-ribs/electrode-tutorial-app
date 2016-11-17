import React from "react";
import {IndexRoute, Route} from "react-router";
import Home from "./components/home";
import { FirstReusableComponent } from "first-reusable-component";

export const routes = (
  <Route path="/" component={Home}>
    <IndexRoute component={FirstReusableComponent}/>
    <Route path="/invite" component={FirstReusableComponent}/>
  </Route>
);
