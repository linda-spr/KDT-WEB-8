/** @format */

import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState<number>(0);
  interface Data {
    name: string;
    age: number;
  }
  const [data, setData] = useState<null | Data>(null);

  return (
    <>
      <h2>카운터 (useState() generic 사용해보기)</h2>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <br />
    </>
  );
}
