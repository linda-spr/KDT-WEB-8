import React, { useState, useMemo } from "react";

function Calc() {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState("");

    const calc = useMemo(() => {
        console.log("Calculating...");
        // 여기서는 단순화된 예로 1000만번 루프를 돌립니다.
        for (let i = 0; i < 10000000; i++) {}
        return count * 2;
    }, [count]);
    //의존성 배열의 값이 변경되지 않으면 calc 함수는 다시 호출되지 않습니다. 대신 이전에 계산된 값을 반환
    //이 예제에서는 count 값이 변경될 때만 calc가 다시 계산됩니다. 만약 inputValue가 변경되어도 컴포넌트가 리렌더링되지만, calc는 다시 계산되지 않습니다.

    return (
        <div>
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <p>Count: {count}</p>
            <p>Doubled Count: {calc}</p>
        </div>
    );
}

export default Calc;
