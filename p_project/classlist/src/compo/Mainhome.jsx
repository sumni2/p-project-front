import React from "react";
import "./Mainhome.css";
import book1 from "./book1.jpeg"
import { useNavigate } from "react-router-dom";


function Mainhome(){
    const navigate = useNavigate();
      
    const goClassAlone = () => {
        navigate("/Classalone");
    }
      
    const goBuildings = () => {
        navigate("/Buildings");
    }
      
  return (
    <div>
        <img class="bookimg" src={book1} alt="" />
        <body class="bg-white text-gray-800">
            <div class="container mx-auto p-4">
                <h1 class="text-2xl font-bold text-center mb-6">빈 강의실 찾기 서비스</h1>
                <div class="flex flex-col items-center space-y-4">
                    <button class="cloud-btn" id="individual" onClick={goClassAlone}>개인</button>
                    <button class="cloud-btn" id="group" onClick={goBuildings}>단체</button>
                </div>
            </div>
        </body>
    </div>
  );
}
export default Mainhome;