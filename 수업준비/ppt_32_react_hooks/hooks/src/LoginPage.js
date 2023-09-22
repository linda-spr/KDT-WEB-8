import { useReducer } from 'react';
import Reducer from './reducer/Reducer';
import LoginForm from './components/LoginForm';
import { userInfo } from './data/userInfo';

const LoginPage = () => {
  const [state, dispatch] = useReducer(Reducer, {
    isLogin: false,
    message: '',
  });

  return (
    <div className="main">
      {state.isLogin ? (
        <>
          <strong>환영합니다~ {userInfo.realId}님!</strong>
          <button onClick={() => dispatch({ type: 'LOGOUT' })}>로그아웃</button>
        </>
      ) : (
        <LoginForm state={state} dispatch={dispatch} />
      )}
    </div>
  );
};

export default LoginPage;
