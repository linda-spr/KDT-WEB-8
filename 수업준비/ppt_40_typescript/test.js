// typescript를 쓰는 이유
// 1) js로 실행 시 타입 체크가 없어 의도와 다른 방식으로 쓰일 수 있음
// 2) 정적 파일 언어 -> 실행하지 않고 코드 상의 에러를 알려줌(실시간 디버깅)
function sum(a, b, c) {
  console.log(a); // 1
  console.log(b); // 2
  console.log(c); // undefined
  return a + b + c; // NaN
}
console.log(sum(1, 2));

// ts 파일이 js 파일로 변형된 것
// const a: string = "hi";
// console.log(a);
const a = "hi";
console.log(a);
