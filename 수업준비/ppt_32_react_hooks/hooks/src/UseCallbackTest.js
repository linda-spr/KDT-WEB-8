import React, { useState, useCallback } from 'react';

// useCallback hooks
// 매번 함수를 생성하지 않고 기억하게 해두었다가 필요할 때마다 함수를 재사용
function UseCallbackTest() {
  const [text, setText] = useState('');

  // [before] useCallback hooks 미사용
  // input 태그같이 업데이트가 잦은 state가 있는 컴포넌트라면 매번 새롭게 이벤트 핸들러 함수가 생성
  // const onChangeText = (e) => {
  //   setText(e.target.value);
  // };

  // [after] useCallback hooks 사용
  // 반복해서 생성되는 이벤트 핸들러 함수를 useCallback으로 감싸주면 함수를 메모이제이션하여,
  // 컴포넌트가 리렌더링 되더라도 의존하는 값들이 바뀌지 않는 한 기존 함수를 계속해서 반환
  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  return (
    <>
      <h1>useCallback hooks test</h1>
      <input onChange={onChangeText} />
      <div>
        <b>작성한 값: {text || '없음'}</b>
      </div>
    </>
  );
}

export default UseCallbackTest;

// 추가 필기

// useCallback vs. useMemo
// const memoizedCallback = useCallback(function, deps);
// const memoizedValue = useMemo(() => function, deps);

// useCallback은 useMemo 기반으로 만들어진 Hook
// useCallback은 useMemo에서 값이 아닌 "함수를 사용할 때"에 편의성을 증진시킨 Hook

// 공통점: 성능 최적화
// 차이점: 특정 "값"(useMemo)을 재사용할지 특정 "함수"(useCallback)를 재사용할지에 따라 선택적으로 사용

// useMemo는 값의 재사용을 위해 전달된 함수를 실행하고 "그 결과"를 메모이제이션
// useCallback은 함수의 재사용을 위해 전달된 "함수 자체"를 메모이제이션
