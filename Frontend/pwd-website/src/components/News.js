import React from "react";

//CSS
import "../css/page.css";
import "../css/text.css";
import "../css/news.css";

//Image
import Man from "../images/Group 19.svg";

//NewsImage
import Image1 from "../images/news/14524496_1843148859249487_9154567618030435358_o.webp";
import Image2 from "../images/news/be-my-eyes-app-help-blind-people-work-in-thai-language-cover-800x450.jpeg";
import Image3 from "../images/news/com05280960p1.jpeg";
import Image4 from "../images/news/sound-noti3.jpeg";
import Image5 from "../images/news/leave-1913643_1920.jpeg";

export default function News() {
  const news = [
    {
      img: Image1,
      name: "มาอ่านหนังสือให้ผู้พิการทางสายตาฟัง ด้วยแอป Read for the Blind กันเถอะ!!",
      date: "11 Jan 2017",
      description:
        "เสียงพูดของเราที่เราได้ยินจนเคยชินอยู่ทุกวัน จากการพูดคุยกับคนอื่นบ้าง การร้องเพลงบ้าง หรือจะเป็นเสียงหัวเราะดังๆ ของเรา มันอาจดูไม่มีอะไรน่าตื่นเต้น แต่สำหรับบางคน มันอาจเป็นเสียงที่สำคัญและมีความหมาย อย่างเช่น ผู้พิการทางสายตา ที่ต้องการความรู้จากหนังสืออย่างหลากหลาย แต่ไม่สามารถจะอ่านหนังสือเหล่านั้นได้ ด้วยข้อจำกัดของหนังสือเบรลล์ที่ทำมาให้ผู้พิการทางสายตายังมีไม่มากพอ",
      link: "https://www.beartai.com/review/appreview/143881",
    },
    {
      img: Image2,
      name: "แนะนำแอพ Be My Eyes ให้คุณเป็นดวงตาแทนคนตาบอด รองรับภาษาไทย ใช้ได้จริง !!",
      date: "11 Jan 2017",
      description:
        "ช่วงเดือนที่ผ่านมา มีแอพตัวหนึ่งซึ่งโด่งดังมากในต่างประเทศ ขนาดที่สำนักข่าวชื่อดังมาทำข่าวช่วยโปรโมทแอพตัวนี้ให้ฟรีๆ ซึ่งเป็นแอพที่ช่วยเหลือผู้พิการทางสายตา ในชื่อ “Be My Eyes”",
      link: "https://www.macthai.com/2015/03/20/be-my-eyes-app-help-blind-people-work-in-thai-language/",
    },
    {
      img: Image3,
      name: "“พรรณนา” มองไม่เห็นก็ดูหนังได้ ดึงเทคโนโลยีสร้างความเท่าเทียม",
      date: "11 Jan 2017",
      description:
        "“พรรณนา” (Pannana) คือแอปพลิเคชั่นเสียงบรรยายภาพสำหรับผู้พิการทางการมองเห็น ทำให้สามารถสร้างภาพจินตนาการจากการฟังบรรยายภาพด้วยเสียง",
      link: "https://www.prachachat.net/ict/news-46927",
    },
    {
      img: Image4,
      name: "Google อัปเดตฟีเจอร์ Live Transcribe จับเสียงรอบข้างแล้วแจ้งเตือนเป็นข้อความ สำหรับผู้บกพร่องทางการฟัง",
      date: "11 Jan 2017",
      description:
        "Google เปิดตัวฟีเจอร์ Live Transcribe ไปเมื่อช่วงต้นปีที่ผ่านมา โดยฟีเจอร์ดังกล่าวจะถอดคำพูดต่างๆ ที่เข้ามาในไมค์มือถือให้กลายเป็นตัวหนังสือได้แบบเรียลไทม์",
      link: "https://droidsans.com/google-live-transcibe-sound-notification-feature-recognise-sound-turns-to-text/",
    },
    {
      img: Image5,
      name: "เทคโนโลยีช่วย “คนพิการ” เทรนด์ธุรกิจเพื่อสังคม",
      date: "11 Jan 2017",
      description:
        "การเดินทางของผู้พิการในหลายเมืองของโลกในปัจจุบันเต็มไปด้วยอุปสรรคมากมาย จากปัญหาการขาดสิ่งอำนวยความสะดวกและความสลับซับซ้อนของผังเมือง ด้วยเหตุนี้",
      link: "https://www.prachachat.net/world-news/news-335094",
    },
  ];

  function openLink(value) {
    window.open(value, "_blank");
  }

  return (
    <div id="news" className="section">
      <div className="page-container">
        <img id="man-img" src={Man} alt=""></img>
        <h1 className="bg-text story-text">NEWS</h1>

        <hr className="black-bar"></hr>

        <div id="news-section">
          <div>
            <div>
              <img
                className="big-img clickable"
                src={news[0].img}
                alt=""
                onClick={() => openLink(news[0].link)}
              ></img>
              <h1
                className="md-text bold clickable"
                onClick={() => openLink(news[0].link)}
              >
                {news[0].name}
              </h1>
              <h1 className="xsm-text date bold">01 Nov 2021</h1>
              <p className="xsm-text">
                {news[0].description}{" "}
                <span
                  className="readmore semi-bold"
                  onClick={() => openLink(news[0].link)}
                >
                  ....Read more
                </span>
              </p>
            </div>
          </div>
          <div id="small-news-section">
            {news.map((x, i) =>
              i > 0 ? (
                <div className="small-news" key={i}>
                  <div>
                    <img
                      className="small-img clickable"
                      src={news[i].img}
                      alt=""
                      onClick={() => openLink(news[i].link)}
                    ></img>
                  </div>
                  <div>
                    <h1
                      className="sm-text bold clickable small-header"
                      onClick={() => openLink(news[i].link)}
                    >
                      {news[i].name}
                    </h1>
                    <h1 className="xsm-text date bold">{news[i].date}</h1>
                    <p className="xsm-text">
                      {news[i].description}
                      <span
                        onClick={() => openLink(news[i].link)}
                        className="readmore semi-bold"
                      >
                        ....Read more
                      </span>
                    </p>
                  </div>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
