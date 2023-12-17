import Classalone from "./compo/Classalone";
import Buildings from "./compo/Buildings";
import Mainhome from "./compo/Mainhome";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App(){

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Mainhome />}/>
        <Route path="/Classalone" element={<Classalone />} />
        <Route path="/Buildings" element={<Buildings />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;
