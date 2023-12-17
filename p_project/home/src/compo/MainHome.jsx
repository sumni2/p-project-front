import React from "react";
import "./MainHome.css";
import homeicon from "./photo/homeicon.png";
// import settingicon from "./photo/settingicon.png";
// import scheduleicon from "./photo/scheduleicon.png"
// import {useState} from "react"

function MainHome(){

  // const[setAction] = useState("개인");

    return (
      <div>
        <header>
          <div className="header"></div>
        </header>
        <body>
        <div className="container">
          <div className="people">개인</div>
          <div className="people">단체</div>
        </div>
        </body>
        <div className="foot">
          <img className="home" src={homeicon} alt="" />
        </div>
      </div>
    );
  }
  export default MainHome;

