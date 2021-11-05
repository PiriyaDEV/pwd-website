import React from "react";

import { Route, Switch } from "react-router-dom";

import Landing from "./components/Landing";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/">
          <Landing />
        </Route>
        {/* <Route path="/:id">
          <p>ไม่มี pathนี้</p>
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
