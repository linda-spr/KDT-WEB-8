import React, { useState, useCallback } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <ChildComponent onClick={incrementCount} />
      <p>Count: {count}</p>
    </div>
  );
}

function ChildComponent({ onClick }) {
  console.log('ChildComponent rendered!');
  return <button onClick={onClick}>Increment Count</button>;
}

export default ParentComponent;

//예제에서 ParentComponent의 inputValue가 바뀔 때마다 ParentComponent는 리렌더링됩니다.
//그러나 useCallback 덕분에 incrementCount 함수는 재생성되지 않습니다.
//따라서, ChildComponent에 전달되는 onClick prop은 변하지 않아, ChildComponent는 불필요하게 리렌더링되지 않습니다
