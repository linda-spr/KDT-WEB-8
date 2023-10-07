/** @format */

import { useRef, useState } from "react";

export default function SetText() {
  // 1. DOM 요소에 접근할 때
  // input에 접근할 때, input의 타입
  const ref = useRef<HTMLInputElement>(null);

  // 2. 어떤 값을 담아두고 싶을 때(값이 변해도 다시 렌더링되지 않음)
  const refVal = useRef<number>(0);

  const [text, setText] = useState<string>("");

  const onClickState = () => {
    // ref 의 초기값을 null으로 지정했기 때문에,
    // 처음의 ref.current.value 는 null의 value를 참조하고 있는 것이기 때문에 undefined
    // text 라는 state를 undefined로 지정할 위험이 있음

    // type이 string인지 확인하고,
    // string일 때만 text state를 변경하도록 하는 것
    if (typeof ref.current?.value == "string") {
      setText(ref.current.value);
      console.log("text 변경 완료");
    }
    console.log("함수 동작중"); //input 에 ref 지정 안줬을 떄
  };
  console.log(refVal.current);
  const onClickRef = () => {
    refVal.current += 1;
    console.log("ref : " + refVal.current);
  };

  //
  const checkString = () => {
    console.log("state string :", text);
    console.log("ref string :", ref.current?.value);
  };
  return (
    <>
      <h2>useRef 사용해보기</h2>
      {/* Dom에 접근하는 ref */}
      <input type="text" onChange={checkString} ref={ref} />
      <button onClick={onClickState}>변경 (state)</button>
      <div>state String :{text}</div>
      <div>ref String : {ref.current?.value}</div>

      {/* 변수로 쓰이는 ref */}
      <button onClick={onClickRef}>+1 (ref)</button>
      <div>ref value: {refVal.current}</div>
    </>
  );
}
