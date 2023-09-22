import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

const UseCallbackTest3 = ({ postId }) => {
  const [post, setPost] = useState([]);

  // useEffect 의 의존성 배열에 함수가 들어가면, 함수도 객체 타입이기 때문에 챕터6(실습2)에서 봤던 참조 동일성 문제가 발생합니다.
  // 앞에서는 값을 재사용하기 위해서 useMemo를 통해 메모이제이션 했다면 이번에는 함수를 재사용해야 하므로 useCallback을 사용해보겠습니다.

  // useCallback으로 함수를 감싸주면 해당 함수는 이미 메모이제이션 되었기 때문에 의존성 배열로 넣어준 postId를 변경하지 않는 한 컴포넌트는 리렌더링되지 않습니다.
  const getPost = useCallback(async () => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
    );
    setPost(res.data);
  }, [postId]);

  useEffect(() => {
    getPost();
  }, [getPost]);

  return (
    <>
      <div key={post.id}>
        <span>{post.id} - </span>
        <span>{post.title}</span>
      </div>
    </>
  );
};

export default UseCallbackTest3;
