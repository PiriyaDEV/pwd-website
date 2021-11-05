import React from "react";

//CSS
import "../css/page.css";
import "../css/text.css";
import "../css/theirvoice.css";

//Image
import BgImage from "../images/Image1@2x.png";
import Ano1 from "../images/voice/ano-girl.png";
import PLoong from "../images/voice/ploong.png";

export default function TheirVoice() {
  return (
    <div
      id="theirvoice"
      style={{ backgroundImage: `url(${BgImage})` }}
      className="section"
    >
      <div className="page-container">
        <h1 className="md-text white-text bold shadow">HEAR THEIR VOICES</h1>
        <h1 className="ssm-text white-text bold shadow">VOICES OF PWD</h1>

        <div id="voice-box-section" className="section">
          <div className="voice-box">
            <p className="xsm-text voice-p">
              “Anything that normal people can do, blind people can also do it
              too.”
            </p>
            <hr className="voice-bar" />

            <div className="voice-info">
              <div>
                <img className="p-img" src={PLoong} alt=""></img>
              </div>
              <div>
                <h1 className="voice-head bold">Sittichoke W.</h1>
                <h1 className="voice-desc">Visually Impiared</h1>
              </div>
            </div>
          </div>

          <div className="voice-box">
            <p className="xsm-text voice-p">
              “I wish that people would try to understand autistic people and
              our symptoms.”
            </p>
            <hr className="voice-bar" />

            <div className="voice-info">
              <div>
                <img className="p-img" src={Ano1} alt=""></img>
              </div>
              <div>
                <h1 className="voice-head bold">Anonymous</h1>
                <h1 className="voice-desc">Asperger</h1>
              </div>
            </div>
          </div>

          <div className="voice-box">
            <p className="xsm-text voice-p">
              “Having Kidney Diseases and being amputee, it is very hard to me
              to transport.”
            </p>
            <hr className="voice-bar" />

            <div className="voice-info">
              <div>
                <img className="p-img" src={Ano1} alt=""></img>
              </div>
              <div>
                <h1 className="voice-head bold">Anonymous</h1>
                <h1 className="voice-desc">Amputee</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
