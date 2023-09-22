import { useState, useMemo } from 'react';

// [before] useMemo hooks 미사용
// 위 코드의 경우, 숫자를 등록할 때 뿐만이 아니라, input의 내용을 수정할 때도 계산(콘솔찍기로 확인 가능) 이 이뤄짐.
// => getAverage 함수가 호출되고 있음
// => useMemo를 사용할 경우, 렌더링 하는 과정에서 "특정 값이 바뀌었을 때만 연산"!!
function getAverage(numbers) {
  console.log('평균값 계산..!');

  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  // 참고) javascript reduce() 사용법
  // https://ko.javascript.info/array-methods#ref-583

  return sum / numbers.length;
}

const UseMemoTest = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const onChange = (e) => {
    setNumber(e.target.value);
  };

  const onInsert = () => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  };

  // [after] useMemo hooks 사용
  // 렌더링 과정에서 두 번째 인자로 받은 의존 배열(dependency) 내 값이 바뀌는 경우에만 첫번째 인자로 받은 콜백함수를 실행해 구한 값을 반환한다.
  // 즉, list 값이 변경될 때에만 callback 함수 실행
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <h1>useMemo hooks test</h1>
      <input value={number} onChange={onChange} type="number" />
      <button onClick={onInsert}>등록</button>

      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>

      <div>
        {/* [before] useMemo hooks 미사용 */}
        {/* <b>평균값: {getAverage(list)}</b> */}
        {/* [after] useMemo hooks 사용 */}
        <b>평균값: {avg}</b>
      </div>
    </div>
  );
};

export default UseMemoTest;

// 추가 필기
// useEffect vs. useMemo
// - useEffect : 모든 렌더링이 완료된 이후에 실행
//    렌더링 후 상태가 업데이트 되었을 때를 감지하여 동작하기 때문에 리렌더링을 방지하지 못합니다.
// - useMemo : 렌더링 과정 중에 실행
//    렌더링 과정 중에 의존성 배열의 값이 변경 되었는지 확인한 후, 값이 변경 되었다면 이전에 저장한 값과 비교하여 값이 다른 경우에만 리렌더링
//    useMemo는 메모이제이션 기법을 통해 불필요한 계산을 최소화하고, 리렌더링을 막을 수 있으므로 렌더링 성능을 최적화할 때 useMemo Hook을 사용
