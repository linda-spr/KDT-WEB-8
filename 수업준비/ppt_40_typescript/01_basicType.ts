let num: number = 1;
num = 2;
console.log(num);
// num = "star"; // number 형으로 선언했는데 다른 형 와서 오류
let str: string = "str";
let isTrue: boolean = true;
let undef: undefined;
let empty: null = null;
// array와 object 선언해보기...
/* array의 갯수를 미리 명시해둘 필요는 없지만 array의 elements 가
어떤 type으로 이루어져있는지 명시 필요함 */
let arr: string[];
const numArr: number[] = [1, 2, 3, 4, 5];
let strArr: Array<string> = ["apple", "tomato", "melon"];

// 그러면 배열에  여러 개의 타입을 넣고 싶을 때는?
// 1. number or string 타입이 올 수 있는 배열 arr1
let arr1: (number | string)[] = [1, 2, 3, "one", "two", "three"];
// 2. boolean or null or number array 가 들어가는  배열 arr2
let arr2: Array<boolean | null | number[]> = [true, false, null, [10, 20]];
// 3. 어떤 자료형이든 상관없이 들어갈 수 있는 배열 arrAny
/* 
참고: 후에 anytype에 대해 배우겠지만 타입을 정확하게 명시하기 곤란할 때 사용하는 type
하지만 과다하게 사용하는 것은 좋지 않다.
*/
let arrAny: any[] = [1, 2, 3, 4, "anyting you want", true, null];
// object
let obj1: object = {
  name: "hi",
  age: 11,
};
