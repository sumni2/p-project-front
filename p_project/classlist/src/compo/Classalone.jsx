import React from "react";
import { useNavigate } from "react-router-dom";

function Classalone(){
    const navigate = useNavigate();
      
    const goMainHome = () => {
        navigate("/");
    }
  return (
    <div>
        <body class="bg-gray-50">
        <div class="container mx-auto p-4">
            <div class="bg-white shadow rounded-lg p-6">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div class="mb-4 md:mb-0">
                        <select id="serviceType" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                            <option id="1" value="공과대학2">공과대학2</option>
                            <option id="2" value="바이오나노대학">바이오나노대학</option>
                            <option id="3" value="가천관">가천관</option>
                            <option id="4" value="비전타워">비전타워</option>
                            <option id="5" value="공과대학1">공과대학1</option>
                            <option id="6" value="예술대학2">예술대학2</option>
                            <option id="7" value="한의과대학">한의과대학</option>
                            <option id="8" value="산학협력관">산학협력관</option>
                            <option id="9" value="AI관">AI관</option>
                            <option id="10" value="예술대학1">예술대학1</option>
                            <option id="11" value="글로벌센터">글로벌센터</option>
                            <option id="12" value="종합운동장">종합운동장</option>
                            <option id="13" value="교육대학원">교육대학원</option>
                            <option id="14" value="바이오나노연구">바이오나노연구</option>
                            <option id="15" value="반도체대학">반도체대학</option>
                            <option id="16" value="테니스장">테니스장</option>
                            <option id="17" value="바나연">바나연</option>
                            <option id="18" value="대학원">대학원</option>
                        </select>
                    </div>
                    <div class="flex items-center justify-between">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
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
                            {/* Repeat this block for each entry */}
                            <tr class="h-14 border-gray-300 border-b">
                                <td class="pl-4">Y101 (0)</td>
                                <td>11:00 - 11:50</td>
                                <td class="text-right pr-4">다음 수업 없음</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </body>
    <div class="container mx-auto p-4">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={goMainHome}>홈으로 돌아가기</button>
    </div>
    </div>
  );
}
export default Classalone;