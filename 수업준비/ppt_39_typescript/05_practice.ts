// 1번
let olimpic_newgame: readonly [object, boolean];
olimpic_newgame = [
  {
    name: "쇼트트랙",
    type: "혼성 계주",
  },
  true,
];
// olimpic_newgame[1]=false;
console.log(olimpic_newgame);

// 2번
interface Game {
  title: string;
  price: number;
  desc?: string;
  category: string;
  platform: string;
}
let heroGame_A: Game = {
  title: "DC 언체인드",
  price: 50000,
  desc: "DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!",
  category: "액션",
  platform: "모바일",
};

let heroGame_B: Game = {
  title: "MARVEL 퓨처파이트",
  price: 65000,
  category: "롤플레잉",
  platform: "모바일",
};

// 합 구하기

// 매개변수 2개 받고 합 구하기
// 합은 console.log 로 출력

function sum1(a: number, b: number): void {
  console.log("두 수의 합: ", a + b);
}

// 합은 return
// ...a : 나머지 매개변수, 남아있는 매개변수들을 한데 모아 배열 a에 집어넣어라(항상 마지막에 있어야 함)
function sum2(...a: number[]): number {
  let sum = 0;
  a.forEach((el) => (sum += el));
  return sum;
}
sum1(5, 11);
console.log(sum2(1, 2, 3, 4, 10));

// 제네릭 실습
function arrElement<T>(arr: T[], index: number): T | boolean {
  if (arr.length <= index) {
    return false;
  }
  return arr[index];
}

console.log(arrElement<string>(["a"], 0));
console.log(arrElement<string>(["a"], 1));
