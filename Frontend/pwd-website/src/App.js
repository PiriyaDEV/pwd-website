import React from "react";

import { Route, Switch } from "react-router-dom";

import Landing from "./components/Landing";
import Story from "./components/Story";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/">
          <Landing />
          <Story />
        </Route>
        {/* <Route path="/:id">
          <p>ไม่มี pathนี้</p>
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
