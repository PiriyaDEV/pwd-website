import React from "react";

//CSS
import "../css/page.css";
import "../css/text.css";
import "../css/contact.css";

export default function Contact() {
  return (
    <div id="contact" className="section">
      <div className="page-container">
        <div id="contact-container">
          <div>
            <h1 className="md-text contact-text bold">CONTACT</h1>
            <hr align="left" className="small-black-hr"></hr>
          </div>

          <div>
            <h1 className="ssm-text bold">CPE KMUTT</h1>
            <p className="xsm-text contact-p">
              10th-11th Floor,Witsawawattana Building, King Mongkut's University
              of technology Thonburi 126 Pracha Uthit Road, Bang Mot, Thung
              Khru, Bangkok 10140
            </p>
            <p className="xsm-text">
              Tel: 080-xxx-xxxx (Harry) <br />
              Tel: 080-xxx-xxxx (Piriya)
            </p>
          </div>

          <div id="about-box">
            <h1 className="xsm-text bold">About this website</h1>
            <p className="voice-desc contact-p">
              This website is a part of GEN241 Beauty of Life in KMUTT, and we
              aim to help people understand more about PWD and walk toward an
              inclusive society
            </p>
            <p className="voice-desc bold">
              © 2021 Group 1. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
