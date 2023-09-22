import React, { useEffect, useState, useMemo } from 'react';

const UseMemoTest2 = () => {
  const [number, setNumber] = useState(0);
  const [isTrue, setIsTrue] = useState(true);

  // [before] answer 타입이 원시 타입인 경우
  // const answer = isTrue ? 'true' : 'false';

  // [after] answer 타입이 객체(참조 타입)인 경우
  // 객체 타입은 그 값이 변수에 직접 저장되는 게 아니라, 메모리 주솟값이 할당되어 값을 참조하게 됩니다.
  // 따라서 컴포넌트가 리렌더링되면 객체는 다른 메모리에 할당되고, 변수에는 그에 맞는 달라진 주솟값이 할당됩니다.
  // useEffect는 렌더링 전과 후의 answer의 주솟값이 다르다고 판단하여 콘솔을 출력
  // const answer = { bool: isTrue ? 'true' : 'false' };

  // [해결]  useMemo를 통해 해결해보겠습니다. 위 코드와 같이 useMemo를 사용하여 코드를 변경하면 최초로 렌더링 될 때 객체의 주솟값을 answer가 메모이제이션합니다.
  // 이후 리렌더링부터는 메모이제이션 된 주솟값을 재사용하게 됩니다.
  // 따라서 반복적으로 리렌더링 되더라도 콘솔은 찍히지 않습니다.
  const answer = useMemo(() => {
    return { bool: isTrue ? 'true' : 'false' };
  }, [isTrue]);

  // answer가 바뀔 때만 콘솔이 찍히도록 작성
  useEffect(() => {
    console.log('answer이 변경되었습니다.');
  }, [answer]);

  return (
    <div>
      <p>✨ number</p>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <hr />
      <p>✨ answer</p>
      {/* [before] answer 타입이 원시 타입인 경우 */}
      {/* <p>T or F ? {answer}</p> */}
      {/*  [after] answer 타입이 객체(참조 타입)인 경우 */}
      <p>T or F ? {answer.bool}</p>
      <button onClick={() => setIsTrue(!isTrue)}>Click</button>
    </div>
  );
};
export default UseMemoTest2;

// [정리]
// useMemo는 메모이제이션으로 수행한 연산의 결괏값을 기억함으로써 불필요한 계산을 최소화하고, 리렌더링을 막을 수 있습니다.
