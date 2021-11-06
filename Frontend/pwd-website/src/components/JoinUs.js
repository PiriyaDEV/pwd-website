import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import db from "../firebase";

//CSS
import "../css/page.css";
import "../css/text.css";
import "../css/joinus.css";

//Image
import Girl from "../images/Group 5.svg";
import BgImage from "../images/Image1@2x.png";

export default function JoinUs() {
  const [email, setEmail] = useState("");
  const [alertEmail, setAlertEmail] = useState(false);

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
    if (email) {
      const collectionRef = collection(db, "mail");
      const payload = { email, dateTime };
      await addDoc(collectionRef, payload);
      setEmail("");
      setAlertEmail(true);
    }
  };

  return (
    <div
      id="joinus"
      style={{ backgroundImage: `url(${BgImage})` }}
      className="section"
    >
      <div className="page-container">
        <div className="section">
          <div id="join-box" className="section">
            <div>
              <img id="girl-img" src={Girl} alt=""></img>
            </div>
            <div>
              <h1 className="sm-text join-center">Be one of us to promote</h1>
              <h1 className="md-text bold join-center">Inclusive Society</h1>

              <div id="join-btn">
                <input
                  className="xsm-text semi-bold"
                  placeholder="Your Email"
                  onChange={handleOnChange}
                  value={email}
                ></input>
                <button className="xsm-text bold" onClick={createEmail}>
                  JOIN
                </button>
              </div>

              {alertEmail && (
                <p className="xsm-text alert semi-bold">
                  Your Email has been collect
                </p>
              )}

              <p className="xsm-text join-desc">
                Get news about PWD and many more to make this world a better
                place for everyone
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
