import React from "react";

//CSS
import "../css/page.css";
import "../css/text.css";
import "../css/landing.css";

//Image
import BgImage from "../images/MainPhoto@2x.png";
import Arrow from "../images/Group 2@2x.png";

export default function Landing() {

  function scrollToStoryDiv() {
    const divElement = document.getElementById("story");
    divElement.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div
      id="landing"
      style={{ backgroundImage: `url(${BgImage})` }}
      className="section"
    >
      <div className="page-container">
        <div id="main-content">
          <h1 className="bg-text white-text">
            INCLUSIVE <br /> SOCIETY
          </h1>
          <h1 className="md-text white-text">
            start by understand <br />
            and respect other
          </h1>
          <h1 className="ssm-text white-text">Learn more about PWD</h1>
          <div onClick={scrollToStoryDiv} id="arrow-down">
            <img src={Arrow} alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
}
