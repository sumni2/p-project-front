import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ClassItem from "./ClassItem";

function Classalone() {
  const navigate = useNavigate();

  const goMainHome = () => {
    navigate("/");
  };

  const [id, setId] = useState("1");
  const [classes, setClasses] = useState([]);

  const handleSelect = (e) => {
    setId(e.target.value);
  };

  const handleOk = () => {
    axios
      .get("http://ceprj.gachon.ac.kr:60034/api/empty-room?id=" + id)
      .then((res) => {
        setClasses(res.data);
      });
  };

  return (
    <div>
      <body class="bg-gray-50">
        <div class="container mx-auto p-4">
          <div class="bg-white shadow rounded-lg p-6">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div class="mb-4 md:mb-0">
                <select
                  id="serviceType"
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  onChange={handleSelect}
                  value={id}
                >
                  <option value="1">공과대학2</option>
                  <option value="2">바이오나노대학</option>
                  <option value="3">가천관</option>
                  <option value="4">비전타워</option>
                  <option value="5">공과대학1</option>
                  <option value="6">예술대학2</option>
                  <option value="7">한의과대학</option>
                  <option value="8">산학협력관</option>
                  <option value="9">AI관</option>
                  <option value="10">예술대학1</option>
                  <option value="11">글로벌센터</option>
                  <option value="12">종합운동장</option>
                  <option value="13">교육대학원</option>
                  <option value="14">바이오나노연구</option>
                  <option value="15">반도체대학</option>
                  <option value="16">테니스장</option>
                  <option value="17">바나연</option>
                  <option value="18">대학원</option>
                </select>
              </div>
              <div class="flex items-center justify-between">
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={handleOk}
                >
                  확인
                </button>
              </div>
            </div>
            <div class="overflow-auto">
              <table class="min-w-full bg-white">
                <thead>
                  <tr class="w-full h-16 border-gray-300 border-b py-8">
                    <th class="text-left pl-4">강의실</th>
                    <th class="text-left">사용할 수 있는 시간</th>
                    <th class="text-right pr-4">다음 수업 시작 시간</th>
                  </tr>
                </thead>
                <tbody>
                  {classes.map((it) => (
                    <ClassItem
                      name={it.name}
                      startTime={it.startTime}
                      endTime={it.endTime}
                      nextStartTime={it.nextStartTime}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </body>
      <div class="container mx-auto p-4">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={goMainHome}
        >
          홈으로 돌아가기
        </button>
      </div>
    </div>
  );
}
export default Classalone;
