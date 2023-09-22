import { useState } from 'react';
import { userInfo } from '../data/userInfo';
// => const userInfo = { realId: 'banana', realPw: '4321' };

function LoginForm({ state, dispatch }) {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  // import 확인용
  // console.log(userInfo);

  // state 확인용
  // useEffect(() => {
  //   console.log(id, password);
  // });

  const handleLoginForm = (event) => {
    event.preventDefault();

    const { realId, realPw } = userInfo;

    if (id === realId && password === realPw) {
      // dispatch({ type: 'LOGIN_SUCCESS', payload: userInfo });
      dispatch({ type: 'LOGIN_SUCCESS' });
    } else if (id !== realId && password === realPw) {
      dispatch({ type: 'MISS_ID' });
    } else if (id === realId && password !== realPw) {
      dispatch({ type: 'MISS_PASSWORD' });
    } else {
      dispatch({ type: 'LOGIN_FAILURE' });
    }
  };

  return (
    <form action="" onSubmit={handleLoginForm}>
      <label htmlFor="id">ID</label>
      <input id="id" type="text" onChange={(e) => setId(e.target.value)} />
      <br />

      <label htmlFor="pw">PW</label>
      <input
        id="pw"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />

      <button>Login</button>
      <br />

      <p>{state.message}</p>
    </form>
  );
}

export default LoginForm;
