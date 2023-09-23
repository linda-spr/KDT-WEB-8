import React, { useReducer } from "react";

const initialState = { count: 0 };

//initialState는 카운터의 초기 상태입니다.
//reducer는 상태와 액션을 받아 새로운 상태를 반환하는 함수입니다. 액션의 type에 따라 상태가 어떻게 변경될지를 정의합니다.
//Counter 컴포넌트에서 useReducer를 사용하여 state와 dispatch를 가져옵니다. state는 현재 상태를 나타내며, dispatch는 액션을 발생시켜 상태를 업데이트하는 함수입니다.

function reducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };
        case "DECREMENT":
            return { count: state.count - 1 };
        default:
            throw new Error("Invalid action type");
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
        </div>
    );
}

export default Counter;
