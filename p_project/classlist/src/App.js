import {useState} from "react";
import Dropdown from "./compo/Dropdown";

function App(props){
  const [Down, setDown] = useState(false);

  return (
    <div>
      <button onClick={(e)=>setDown(!Down)}>1층</button>

      <Dropdown visibility={Down}>
        <ul>
          <li>201호</li>
          <li>202호</li>
        </ul>
      </Dropdown>
    </div>
  );
}
export default App;
