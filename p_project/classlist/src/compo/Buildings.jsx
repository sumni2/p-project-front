import React from "react";
// import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Buildings() {
  const navigate = useNavigate();

  const goClassAlone = () => {
    navigate("/Classalone");
  };

  return (
    <div>
      <body class="bg-gray-50">
        <div class="container mx-auto px-4 py-8">
          <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
              <h1 class="text-xl font-semibold mb-2">현재 위치한 건물</h1>
              <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <label class="inline-flex items-center">
                  <input type="checkbox" class="form-checkbox" />
                  <span id="1" class="ml-2">
                    공과대학2
                  </span>
                </label>
                <label class="inline-flex items-center">
                  <input type="checkbox" class="form-checkbox" />
                  <span id="2" class="ml-2">
                    바이오나노대학
                  </span>
                </label>
                <label class="inline-flex items-center">
                  <input type="checkbox" class="form-checkbox" />
                  <span id="3" class="ml-2">
                    가천관
                  </span>
                </label>
                <label class="inline-flex items-center">
                  <input type="checkbox" class="form-checkbox" />
                  <span id="4" class="ml-2">
                    비전타워
                  </span>
                </label>
                <label class="inline-flex items-center">
                  <input type="checkbox" class="form-checkbox" />
                  <span id="5" class="ml-2">
                    공과대학1
                  </span>
                </label>
                <label class="inline-flex items-center">
                  <input type="checkbox" class="form-checkbox" />
                  <span id="6" class="ml-2">
                    예술대학2
                  </span>
                </label>
                <label class="inline-flex items-center">
                  <input type="checkbox" class="form-checkbox" />
                  <span id="7" class="ml-2">
                    한의과대학
                  </span>
                </label>
                <label class="inline-flex items-center">
                  <input type="checkbox" class="form-checkbox" />
                  <span id="8" class="ml-2">
                    산학협력관
                  </span>
                </label>
                <label class="inline-flex items-center">
                  <input type="checkbox" class="form-checkbox" />
                  <span id="9" class="ml-2">
                    AI관
                  </span>
                </label>
                <label class="inline-flex items-center">
                  <input type="checkbox" class="form-checkbox" />
                  <span id="10" class="ml-2">
                    예술대학1
                  </span>
                </label>
                <label class="inline-flex items-center">
                  <input type="checkbox" class="form-checkbox" />
                  <span id="11" class="ml-2">
                    글로벌센터
                  </span>
                </label>
                <label class="inline-flex items-center">
                  <input type="checkbox" class="form-checkbox" />
                  <span id="12" class="ml-2">
                    종합운동장
                  </span>
                </label>
                <label class="inline-flex items-center">
                  <input type="checkbox" class="form-checkbox" />
                  <span id="13" class="ml-2">
                    교육대학원
                  </span>
                </label>
                <label class="inline-flex items-center">
                  <input type="checkbox" class="form-checkbox" />
                  <span id="14" class="ml-2">
                    바이오나노연구
                  </span>
                </label>
                <label class="inline-flex items-center">
                  <input type="checkbox" class="form-checkbox" />
                  <span id="15" class="ml-2">
                    반도체대학
                  </span>
                </label>
                <label class="inline-flex items-center">
                  <input type="checkbox" class="form-checkbox" />
                  <span id="16" class="ml-2">
                    테니스장
                  </span>
                </label>
                <label class="inline-flex items-center">
                  <input type="checkbox" class="form-checkbox" />
                  <span id="17" class="ml-2">
                    바나연
                  </span>
                </label>
                <label class="inline-flex items-center">
                  <input type="checkbox" class="form-checkbox" />
                  <span id="18" class="ml-2">
                    대학원
                  </span>
                </label>
              </div>
            </div>
            <div class="flex justify-center">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
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
                      AI
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
