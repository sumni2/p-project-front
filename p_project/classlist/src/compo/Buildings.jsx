import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const buildings = {
  1: "공과대학2",
  2: "바이오나노대학",
  3: "가천관",
  4: "비전타워",
  5: "공과대학1",
  6: "예술대학2",
  7: "한의과대학",
  8: "산학협력관",
  9: "AI관",
  10: "예술대학1",
  11: "글로벌센터",
  12: "종합운동장",
  13: "교육대학원",
  14: "바이오나노연구",
  15: "반도체대학",
  16: "테니스장",
  17: "바나연",
  18: "대학원",
};

function Buildings() {
  const navigate = useNavigate();
  const goClassAlone = () => {
    navigate("/Classalone");
  };

  const [checkedItems, setCheckedItems] = useState([]);
  const [recommendedBuilding, setRecommendedBuilding] = useState({});

  const handleCheck = (e, id) => {
    if (e.target.checked) {
      setCheckedItems((prev) => [...prev, id]);
    } else if (checkedItems.includes(id)) {
      setCheckedItems(checkedItems.filter((it) => it !== id));
    }
  };

  const handleSubmit = () => {
    axios
      .get(
        "http://ceprj.gachon.ac.kr:60034/api/recommend?" +
          checkedItems.map((it) => "id=" + it).join("&")
      )
      .then((res) => {
        setRecommendedBuilding(res.data);
      });
  };

  return (
    <div>
      <body class="bg-gray-50">
        <div class="container mx-auto px-4 py-8">
          <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
              <h1 class="text-xl font-semibold mb-2">현재 위치한 건물</h1>
              <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Object.keys(buildings).map((it) => (
                  <label class="inline-flex items-center" key={it}>
                    <input
                      type="checkbox"
                      class="form-checkbox"
                      checked={checkedItems.includes(it)}
                      onChange={(e) => handleCheck(e, it)}
                    />
                    <span class="ml-2">{buildings[it]}</span>
                  </label>
                ))}
              </div>
            </div>
            <div class="flex justify-center">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleSubmit}
              >
                제출
              </button>
            </div>
            <div class="mt-8">
              <h2 class="text-lg font-semibold mb-2">추천 건물</h2>
              <table class="min-w-full table-auto">
                <thead class="bg-gray-200">
                  <tr>
                    <th class="px-4 py-2 text-left">건물 이름</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border px-4 py-2" onClick={goClassAlone}>
                      {recommendedBuilding.name}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}
export default Buildings;