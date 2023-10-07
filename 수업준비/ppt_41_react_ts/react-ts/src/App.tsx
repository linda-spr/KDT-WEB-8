/** @format */
import { Routes, Route } from "react-router-dom";
import Lecture from "./pages/Lecture";
import Home from "./pages/Home";
import Practice from "./pages/Practice";
import Calculator from "./pages/Calculator";
import Member from "./pages/Matzip";
import Details from "./pages/Details";

function App() {
  return (
    <>
      {/* props 전달 안했을 때는 빨간 줄 감
    jsx 로 만들었던(ts가 없는) 리액트에서는 컴포넌트에서 정의된 props를 전달하지 않아도
    됐었지만 ts 에서는 물음표로 optional 처리를 하지 않았다면 반드시 데이터를 전달해야 한다.
    */}

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/lecture" element={<Lecture />}></Route>
        <Route path="/practice" element={<Practice />}></Route>
        <Route path="/practice/calc" element={<Calculator />}></Route>
        <Route path="/practice/matzip" element={<Member />}></Route>
        <Route path="/practice/matzip/:title" element={<Details />}></Route>
      </Routes>
    </>
  );
}

export default App;
