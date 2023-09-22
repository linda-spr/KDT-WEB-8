import React, { useCallback, useState } from 'react';

function UseCallbackTest2() {
  const [id, setId] = useState('');

  // [before]  state나 props가 업데이트되면 컴포넌트는 리렌더링 되는데,
  // 만약 아래 코드처럼 사용자로부터 입력받는 input 태그같이 업데이트가 잦은 state가 있는 컴포넌트라면 매번 새롭게 이벤트 핸들러 함수가 생성
  // const onChangeId = (e) => {
  //   setId(e.target.value);
  // };

  // [after] useCallback을 사용한 예제
  // 반복해서 생성되는 이벤트 핸들러 함수를 useCallback으로 감싸주면 함수를 메모이제이션하여,
  // 컴포넌트가 리렌더링 되더라도 의존하는 값들이 바뀌지 않는 한 기존 함수를 계속해서 반환
  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);

  return <input onChange={onChangeId} value={id} />;
}

export default UseCallbackTest2;
