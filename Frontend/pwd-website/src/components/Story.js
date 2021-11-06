import React, { useState, useLayoutEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

//CSS
import "../css/page.css";
import "../css/text.css";
import "../css/story.css";

//Image
import Chair from "../images/Group 9@2x.png";
import Jobs from "../images/Screen Shot 2564-11-04 at 23.16.38@2x.png";

am4core.useTheme(am4themes_animated);
am4core.addLicense("ch-custom-attribution");

export default function Story() {
  const [targetPie, setTargetPie] = useState("Mobility");

  useLayoutEffect(() => {
    var chart = am4core.create("chartdiv", am4charts.PieChart);
    chart.radius = am4core.percent(80);

    // Add data
    chart.data = [
      {
        ability: "Mobility",
        number: 1015955,
        color: am4core.color("#4999df"),
      },
      {
        ability: "Hearing",
        number: 375680,
        color: am4core.color("#50bc9d"),
      },
      {
        ability: "Visually",
        number: 204012,
        color: am4core.color("#f7969d"),
      },
      {
        ability: "Physically",
        number: 151329,
        color: am4core.color("#9c89f4"),
      },
      {
        ability: "Psychologic",
        number: 134996,
        color: am4core.color("#f1b969"),
      },
      {
        ability: "Autism ",
        number: 12297,
        color: am4core.color("#fd8b46"),
      },
      {
        ability: "Learning problems",
        number: 10133,
        color: am4core.color("#f5a1e3"),
      },
      {
        ability: "More than one type of disability",
        number: 128682,
        color: am4core.color("#7defa9"),
      },
      {
        ability: "Waiting for confirmation",
        number: 8075,
        color: am4core.color("#fad46b"),
      },
    ];

    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "number";
    pieSeries.dataFields.category = "ability";
    pieSeries.slices.template.propertyFields.fill = "color";

    // Disable ticks and labels
    pieSeries.labels.template.disabled = true;
    pieSeries.ticks.template.disabled = true;

    // Set up fills
    pieSeries.slices.template.fillOpacity = 1;

    var hs = pieSeries.slices.template.states.getKey("hover");
    hs.properties.scale = 1;
    hs.properties.fillOpacity = 0.5;

    pieSeries.slices.template.events.on("hit", function (ev) {
      let series = ev.target.dataItem.component;
      setTargetPie(ev.target.dataItem.dataContext.ability);
      series.slices.each(function (item) {
        if (item.isActive && item !== ev.target) {
          item.isActive = false;
        }
      });
    });
  }, []);

  return (
    <div id="story" className="section">
      <div className="page-container">
        <h1 className="bg-text story-text white-text">STORY</h1>

        <hr className="white-bar"></hr>

        <div className="story-content reverse-cl">
          <div>
            <h1 className="md-text white-text bold header">
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
            <h1 className="md-text white-text bold header">
              WHY CARE ABOUT <span className="yellow-text">PWD</span> ?
            </h1>
            <h1 className="ssm-text white-text bold pwd-billion header">
              THEY ARE <span className="yellow-text">OVER 1 BILLION</span> OF
              PWD ALL OVER THE WORLD
            </h1>
            <p className="ssm-text white-text story-p">
              According to United Nations Convention on the Rights of Persons
              With Disabilities (CPRD), PWDs include those who have long-term
              physical, mental, intellectual, or sensory impairments, which in
              interaction with various barriers may hinder their full and
              effective participation in society on an equal basis with others.
            </p>
          </div>
        </div>

        <div className="story-content reverse-cl">
          <div>
            <h1 className="md-text white-text bold header">
              PEOPLE WITH DISABILITY IN THAILAND
            </h1>
            {targetPie === "Mobility" ? (
              <div className="transition">
                <h1 className="md-text story-head bold">MOBILITY 49.8%</h1>
                <p className="ssm-text white-text story-p">
                  A mobility impairment is a disability that affects movement
                  ranging from gross motor skills, such as walking, to fine
                  motor movement, involving manipulation of objects by hand.
                </p>
              </div>
            ) : (
              <div className="transition">
                <h1 className="md-text story-head bold">HEARING 18.4%</h1>
                <p className="ssm-text white-text story-p">
                  Hearing loss can have a significant effect on your quality of
                  life. Older adults with hearing loss may report feelings of
                  depression.
                </p>
              </div>
            )}
          </div>
          <div id="chartdiv"></div>
        </div>
      </div>
    </div>
  );
}
