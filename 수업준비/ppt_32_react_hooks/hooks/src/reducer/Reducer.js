const Reducer = (state, action) => {
  console.log('state >> ', state);
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        // user: action.payload,
        isLogin: true,
        message: '로그인 성공!',
      };
    case 'MISS_ID':
      return {
        ...state,
        isLogin: false,
        message: '아이디 오류!',
      };
    case 'MISS_PASSWORD':
      return {
        ...state,
        isLogin: false,
        message: '비밀번호 오류!',
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        isLogin: false,
        message: '아이디랑 비밀번호 모두 오류!',
      };
    case 'LOGOUT':
      return {
        ...state,
        isLogin: false,
        message: '로그아웃!',
      };
    default:
      return {
        ...state,
      };
  }
};

export default Reducer;
