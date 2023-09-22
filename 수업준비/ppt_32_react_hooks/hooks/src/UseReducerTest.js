import { useReducer } from 'react';

const reducer = (prevNumber, action) => {
  // if-else 구문도 가능하지만, 분기가 많은 경우 switch-case로 처리
  switch (action) {
    case 'INCREMENT':
      return prevNumber + 1;
    case 'DECREMENT':
      return prevNumber - 1;
    case 'RESET':
      return 0;
    default:
      return prevNumber;
  }
};

const UseReducerTest = () => {
  // number 값을 변경하기 위해 dispatch 사용

  const [number, dispatch] = useReducer(reducer, 0);

  const increment = () => {
    dispatch('INCREMENT');
  };

  const decrement = () => {
    dispatch('DECREMENT');
  };

  const reset = () => {
    dispatch('RESET');
  };

  return (
    <div>
      <h1>useReducer hooks test</h1>
      <h2>{number}</h2>
      <button onClick={increment}>Plus</button>
      <button onClick={decrement}>Minus</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default UseReducerTest;

// 상태가 객체와 같이 복잡한 경우 다음과 같이..!
// const reducer = (prevNumber, action) => {
//   //reducer의 로직은 action이 새로운 state를 계산하는 데 쓰이는지 확인하기 위해 action.type을 체크합니다.
//   // 이 때, action들이 분명한 의미를 가지고 유용한 정보를 주도록 설명하는 방식의 type 필드를 작성해야 합니다.
//   // 하지만, useReducer에서 사용하는 action 객체에 type 필드를 명시하는 것 또한 자유입니다.
//   switch (action.type) {
//     case 'INCREMENT':
//       return { value: prevNumber.value + 1 };
//     case 'DECREMENT':
//       return { value: prevNumber.value - 1 };
//     case 'RESET':
//       return { value: 0 };
//     default:
//       return { value: prevNumber.value };
//   }
// };

// const UseReducerTest = () => {
//   // number 값을 변경하기 위해 dispatch 사용

//   const [number, dispatch] = useReducer(reducer, { value: 0 });

//   const increment = () => {
//     dispatch({ type: 'INCREMENT' });
//   };

//   const decrement = () => {
//     dispatch({ type: 'DECREMENT' });
//   };

//   const reset = () => {
//     dispatch({ type: 'RESET' });
//   };

//   return (
//     <div>
//       <h1>useReducer hooks test</h1>
//       <h2>{number.value}</h2>
//       <button onClick={increment}>Plus</button>
//       <button onClick={decrement}>Minus</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// };

// export default UseReducerTest;
