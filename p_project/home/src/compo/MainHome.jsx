import React from "react";
import "./MainHome.css";
import homeicon from "./photo/homeicon.png";
import settingicon from "./photo/settingicon.png";
import scheduleicon from "./photo/scheduleicon.png"
import {useState} from "react"

function MainHome(){

  const[setAction] = useState("개인");

    return (
      <div>
        <div className="header"></div>
        <div className="container">
          <div className="people">개인</div>
          <div className="people">단체</div>
        </div>
        <div className="foot">
          <article><img className="schedule" src={scheduleicon} alt="" /></article>
          <article><img className="home" src={homeicon} alt="" /></article>
          <article><img className="setting" src={settingicon} alt="" /></article>
        </div>
      </div>
    );
  }
  export default MainHome;