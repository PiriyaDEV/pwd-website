import React from "react";
// import React,{ useEffect } from "react";

import { Route, Switch } from "react-router-dom";
// import ReactGA from "react-ga"

import Landing from "./components/Landing";
import Story from "./components/Story";
import News from "./components/News";
import JoinUs from "./components/JoinUs";
import Navbar from "./components/Navbar";
import TheirVoice from "./components/TheirVoice";
import Contact from "./components/Contact";

function App() {
  // useEffect(() => {
  //   ReactGA.initialize('G-9GVR0NFT3J')
  // },[])
  return (
    <div>
      <Switch>
        <Route path="/">
          <Navbar />
          <Landing />
          <Story />
          <TheirVoice />
          <News />
          <JoinUs />
          <Contact />
        </Route>
        {/* <Route path="/:id">
          <p>ไม่มี pathนี้</p>
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
