import React from "react";

//CSS
import "../css/page.css";
import "../css/text.css";
import "../css/story.css";

//Image
import Chair from "../images/Group 9@2x.png";
import Jobs from "../images/Screen Shot 2564-11-04 at 23.16.38@2x.png"

export default function Story() {
  return (
    <div id="story" className="section">
      <div className="page-container">
        <h1 className="bg-text story-text white-text">STORY</h1>

        <hr className="white-bar"></hr>

        <div className="story-content">
          <div>
            <h1 className="md-text white-text">
              WHO ARE PEOPLE WITH DISABILITY OR PWD?
            </h1>
            <p className="ssm-text white-text story-p">
              According to United Nations Convention on the Rights of Persons
              With Disabilities (CPRD), PWDs include those who have long-term
              physical, mental, intellectual, or sensory impairments, which in
              interaction with various barriers may hinder their full and
              effective participation in society on an equal basis with others.
            </p>
          </div>
          <div>
            <img id="chair-img" src={Chair} alt=""></img>
          </div>
        </div>

        <div className="story-content">
          <div>
            <img id="jobs-img" src={Jobs} alt=""></img>
          </div>
          <div>
            <h1 className="md-text white-text">
            WHY CARE ABOUT PWD?
            </h1> 
            <h1 className="ssm-text white-text bold">THEY ARE OVER 1 BILLION OF PWD ALL OVER THE WORLD</h1>
            <p className="ssm-text white-text story-p">
              According to United Nations Convention on the Rights of Persons
              With Disabilities (CPRD), PWDs include those who have long-term
              physical, mental, intellectual, or sensory impairments, which in
              interaction with various barriers may hinder their full and
              effective participation in society on an equal basis with others.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
