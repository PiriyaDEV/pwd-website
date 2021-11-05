import React from "react";

//CSS
import "../css/page.css";
import "../css/text.css";
import "../css/landing.css";

export default function Navbar() {
  function scrollToHomeDiv() {
    const divElement = document.getElementById("landing");
    divElement.scrollIntoView({ behavior: "smooth" });
  }

  function scrollToStoryDiv() {
    const divElement = document.getElementById("story");
    divElement.scrollIntoView({ behavior: "smooth" });
  }

  function scrollToNewsDiv() {
    const divElement = document.getElementById("news");
    divElement.scrollIntoView({ behavior: "smooth" });
  }

  function scrollToContactDiv() {
    const divElement = document.getElementById("contact");
    divElement.scrollIntoView({ behavior: "smooth" });
  }

  function scrollToJoinusDiv() {
    const divElement = document.getElementById("joinus");
    divElement.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div id="navbar">
      <div className="navbar-container">
        <div id="home-box">
          <span className="sm-text yellow-text">Beauty</span>
          <span className="sm-text gray-text">Life</span>
        </div>

        <div id="menu" className="section">
          <h1
            onClick={scrollToHomeDiv}
            className="ssm-text white-text bold"
          >
            Home
          </h1>
          <h1 onClick={scrollToStoryDiv} className="ssm-text white-text">
            Story
          </h1>
          <h1
            onClick={scrollToNewsDiv}
            className="ssm-text white-text"
          >
            News
          </h1>
          <h1
            onClick={scrollToContactDiv}
            className="ssm-text white-text"
          >
            Contact
          </h1>

          <div id="member-box">
            <h1 onClick={scrollToJoinusDiv} className="ssm-text white-text">Member</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
