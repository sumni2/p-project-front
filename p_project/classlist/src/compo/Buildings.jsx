import React from "react";

function Buildings(){
  return (
    <div>
        <body class="bg-gray-50">
        <div class="container mx-auto px-4 py-8">
            <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                    <h1 class="text-xl font-semibold mb-2">현재 위치한 건물</h1>
                    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <label class="inline-flex items-center">
                            <input type="checkbox" class="form-checkbox text-blue-600" checked />
                            <span class="ml-2">Entertainment</span>
                        </label>
                        <label class="inline-flex items-center">
                            <input type="checkbox" class="form-checkbox text-green-500" />
                            <span class="ml-2">Health</span>
                        </label>
                        <label class="inline-flex items-center">
                            <input type="checkbox" class="form-checkbox text-red-500" />
                            <span class="ml-2">Music</span>
                        </label>
                        <label class="inline-flex items-center">
                            <input type="checkbox" class="form-checkbox text-gray-600" />
                            <span class="ml-2">Computers</span>
                        </label>
                        <label class="inline-flex items-center">
                            <input type="checkbox" class="form-checkbox text-yellow-500" />
                            <span class="ml-2">Finance</span>
                        </label>
                        <label class="inline-flex items-center">
                            <input type="checkbox" class="form-checkbox text-purple-600" />
                            <span class="ml-2">Technology</span>
                        </label>
                        <label class="inline-flex items-center">
                            <input type="checkbox" class="form-checkbox text-blue-300" />
                            <span class="ml-2">Sports</span>
                        </label>
                        <label class="inline-flex items-center">
                            <input type="checkbox" class="form-checkbox text-pink-400" />
                            <span class="ml-2">Travel</span>
                        </label>
                        <label class="inline-flex items-center">
                            <input type="checkbox" class="form-checkbox text-indigo-600" />
                            <span class="ml-2">Publishing</span>
                        </label>
                    </div>
                </div>
                <div class="flex justify-center">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        SUBMIT
                    </button>
                </div>
                <div class="mt-8">
                    <h2 class="text-lg font-semibold mb-2">층별 안전점수</h2>
                    <table class="min-w-full table-auto">
                        <thead class="bg-gray-200">
                            <tr>
                                <th class="px-4 py-2 text-left">층</th>
                                <th class="px-4 py-2 text-left">유형에서 소요시간</th>
                                <th class="px-4 py-2 text-left">선택에서 소요시간</th>
                                <th class="px-4 py-2 text-left">항목에서 소요시간</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="border px-4 py-2">야외</td>
                                <td class="border px-4 py-2">39</td>
                                <td class="border px-4 py-2">30</td>
                                <td class="border px-4 py-2">30</td>
                            </tr>
                            <tr class="bg-gray-100">
                                <td class="border px-4 py-2">출입구</td>
                                <td class="border px-4 py-2">28</td>
                                <td class="border px-4 py-2">43</td>
                                <td class="border px-4 py-2">28</td>
                            </tr>
                            <tr>
                                <td class="border px-4 py-2">화장실</td>
                                <td class="border px-4 py-2">26</td>
                                <td class="border px-4 py-2">41</td>
                                <td class="border px-4 py-2">39</td>
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