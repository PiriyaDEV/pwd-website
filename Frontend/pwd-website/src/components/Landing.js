import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import db from "../firebase";

//CSS
import "../css/page.css";
import "../css/text.css";
import "../css/landing.css";

//Image
import BgImage from "../images/MainPhoto@2x.png";
import Arrow from "../images/Group 2@2x.png";

export default function Landing() {
  const [email, setEmail] = useState("");

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + " " + time;

  const createEmail = async () => {
    const collectionRef = collection(db, "mail");
    const payload = {  email , dateTime };
    await addDoc(collectionRef, payload);
  };

  return (
    <div
      id="landing"
      style={{ backgroundImage: `url(${BgImage})` }}
      className="section"
    >
      <div className="page-container">
        <div id="navbar">
          <div id="home-box">
            <span className="sm-text yellow-text">Beauty</span>
            <span className="sm-text gray-text">Life</span>
          </div>

          <div id="menu" className="section">
            <h1 className="ssm-text white-text">Home</h1>
            <h1 className="ssm-text white-text">Story</h1>
            <h1 className="ssm-text white-text">News</h1>
            <h1 className="ssm-text white-text">Contact</h1>

            <div id="member-box">
              <h1 className="ssm-text white-text">Member</h1>
            </div>
          </div>
        </div>

        <div id="main-content">
          <h1 className="bg-text white-text">
            INCLUSIVE <br /> SOCIETY
          </h1>
          <h1 className="md-text white-text">
            start by understand <br />
            and respect other
          </h1>
          <h1 className="ssm-text white-text">Learn more about PWD</h1>
          <div id="arrow-down">
            <img src={Arrow} alt=""></img>
          </div>

          <div className="section">
            <input
              className="ssm-text"
              onChange={handleOnChange}
              value={email}
            />
            <button className="ssm-text" onClick={createEmail}>
              Send Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
