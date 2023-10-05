// https://www.youtube.com/watch?v=pReXmUBjU3E&list=PLZKTXPmaJk8KhKQ_BILr1JKCJbR0EGlx0&index=7

function getValue(str: string): string {
  // 리턴되는 값이 string, number, boolean, ..
  // 모든 값이 들어올 수 있는 함수라면
  return str;
}
// 모든 값일 때 any 사용? -> 좋지 않다
function arrLength(arr: any[]): number {
  return arr.length;
}

// generic 사용
// <>를 이용해서 매개변수를 선언하는 공간을 하나 더 만들어 주는 것
// 그 매개변수는 type 만이 들어올 수 있다.
function getValue1<T>(val: T): T {
  return val;
}
function arrLength2<T>(arr: T[]): number {
  return arr.length;
}

arrLength2<string>(["a"]);
arrLength2<number>([1, 2, 3, 4]);

function printSome<T>(x: T, y: T): T {
  //   return x + y;
  console.log(x);
  console.log(y);
  return x;
}
// printSome<number>("hi", 10) (에러)
printSome<string>("hi", "hello");

function printSome1<T, K>(x: T, y: K): void {
  console.log(x);
  console.log(y);
}
printSome1<string, number>("1", 1);
