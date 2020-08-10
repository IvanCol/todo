import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Authorization from "./pages/Authorization";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Table from "./pages/Table";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/info" exact component={Info} />
        <Route path="/auth" exact component={Authorization} />
        <Route path="/table/:name" exact component={Table} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
