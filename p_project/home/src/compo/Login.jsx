import React from "react";
import "./Login.css"
import usericon from "./photo/usericon.png"
import studentIDicon from "./photo/studentIDicon.png"
import passwordicon from "./photo/passwordicon.png"
import {useState} from "react"

function Login(){

    const[action, setAction] = useState("로그인");

    return (
      <div className="container">
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {/* 이름 */}
            {action==="로그인"?<div></div>:<div className="input">
                <img src={usericon} alt="" />
                <input type="name" placeholder="이름"/> 
            </div>}

            {/* 학번 */}
            <div className="input">
                <img src={studentIDicon} alt="" />
                <input type="studentID" placeholder="학번ID"/> 
            </div>
            {/* 비밀번호 */}
            <div className="input">
                <img src={passwordicon} alt="" />
                <input type="password" placeholder="비밀번호"/> 
            </div>
        </div>
        {action==="회원가입"?<div></div>:<div className="forgot-password">비밀번호를 잊으셨나요? <span>클릭</span></div>}
        
        <div className="submit-container">
            <div className={action==="회원가입"?"submit gray":"submit"} onClick={()=>{setAction("로그인")}}>로그인</div>
            <div className={action==="로그인"?"submit gray":"submit"} onClick={()=>{setAction("회원가입")}}>회원가입</div>
        </div>
      </div>
    ); 
  }

  export default Login;  