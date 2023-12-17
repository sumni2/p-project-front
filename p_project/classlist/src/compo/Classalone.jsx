import React from "react";

function Classalone(){
  return (
    <div>
        {/* <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <title>Tailwind CSS</title>
        <link rel="stylesheet" href="./dist/output.css"></link>
        </head> */}
        <body class="bg-gray-50">
        <div class="container mx-auto p-4">
            <div class="bg-white shadow rounded-lg p-6">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div class="mb-4 md:mb-0">
                        <label for="serviceType" class="block text-gray-700 text-sm font-bold mb-2">서비스 종류</label>
                        <select id="serviceType" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                            <option>제공 서비스</option>
                            {/* Add more options here */}
                        </select>
                    </div>
                    <div class="mb-4 md:mb-0">
                        <label for="provider" class="block text-gray-700 text-sm font-bold mb-2">제공자 선택</label>
                        <select id="provider" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                            <option>전체 제공자</option>
                            {/* Add more options here */}
                        </select>
                    </div>
                    <div>
                        <label for="timeSlot" class="block text-gray-700 text-sm font-bold mb-2">시간 선택</label>
                        <select id="timeSlot" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                            <option>모든 시간</option>
                            {/* Add more options here */}
                        </select>
                    </div>
                </div>
                <div class="overflow-auto">
                    <table class="min-w-full bg-white">
                        <thead>
                            <tr class="w-full h-16 border-gray-300 border-b py-8">
                                <th class="text-left pl-4">강의실</th>
                                <th class="text-left">시간</th>
                                <th class="text-right pr-4">다음 수업까지</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Repeat this block for each entry */}
                            <tr class="h-14 border-gray-300 border-b">
                                <td class="pl-4">Y101 (0)</td>
                                <td>11:00 - 11:50</td>
                                <td class="text-right pr-4">다음 수업 없음</td>
                            </tr>
                            {/* Add more entries here */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </body>
    </div>
  );
}
export default Classalone;