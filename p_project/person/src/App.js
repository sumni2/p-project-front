import React from "react";
import Checkbox from "./compo/Checkbox";

function App() {
  return (
    <div className="grid">
      <article>
        <header>
          <h3>현재 위치하신 건물을 선택해주세요.</h3>
        </header>
          <Checkbox value="가천관">가천관</Checkbox>
          <Checkbox value="비전타원">비전타워</Checkbox>
          <Checkbox value="교육대학원">교육대학원</Checkbox>
          <Checkbox value="반도체대학">반도체대학</Checkbox>
          <Checkbox value="공과대학1">공과대학1</Checkbox>
          <Checkbox value="공과대학2">공과대학2</Checkbox>
          <Checkbox value="Ai공학관">Ai공학관</Checkbox>
          <Checkbox value="바이오나노대학">바이오나노대학</Checkbox>
          <Checkbox value="예술대학1">예술대학1</Checkbox>
          <Checkbox value="예술대학2">예술대학2</Checkbox>
          <Checkbox value="한의과대학">한의과대학</Checkbox>
          <Checkbox value="산학협력관">산학협력관</Checkbox>
          <button>제출</button>
      </article>
    </div>
  );
}

export default App;
