// 튜플 타입 선언
let drink: [string, string];

// 튜플 초기화
drink = ["cola", "(주)콜라공장"];

// 튜플 타입 선언과 초기화를 동시에 하는 법
let drink2: [string, string] = ["cola", "(주)콜라공장"];
// 튜플의 데이터를 변경할 때에도, 배열의 데이터를 변경했던 것처럼 인덱스로 접근하면 됨
// 또한 배열의 매소드도 사용할 수 있음

/* spread사용해서 나타낼 수 있음 */
console.log([...drink2, 2500]);

/* readonly */
// 데이터 변경X
let drink3: readonly [string, number] = ["cola", 2500];

// drink3.push("(주)콜라공장"); // error

console.log(drink3);

// -------------enum--------------------
enum Auth {
  admin = 0,
  user = 1,
  guest = 2,
}

enum Cafe {
  americano = "아메리카노",
  latte = "카페라떼",
}

console.log(Auth.admin);
console.log(Auth.user);
console.log(Auth.guest);

console.log(Cafe.americano);
console.log(Cafe.latte);

enum Cake {
  choco, //0
  vanilla, // 1
  strawberry, // 2
  kiwi = "aa", // 숫자와 문자열 같이 쓸 수 있음
}
console.log(Cake.choco); //0
console.log(Cake.vanilla); //1
console.log(Cake.strawberry); //2
console.log(Cake.kiwi); //2

// -------------any--------------------
let val: any;
let anyVal;

// 사용자 정의 타입
/* 
1. interface
2. type 
*/

// 1. interface
interface Student {
  name: string;
  isPassed: boolean;
}

const student1: Student = {
  name: "codee",
  isPassed: false,
};

// 상속도 가능
type Score = "A+" | "A" | "B" | "C" | "D" | "F";
interface 야구부 extends Student {
  position: string;
  weight: number;
  height: number;
  readonly backNumber?: number; //없어도 되는 값 물음표 처리
  //   [grade: number]: string;
  [grade: number]: Score;

  // 키-value 타입이 여러개 올 수 있을 떄
  // grade 라는 이름이 key가 되는건 아니고 의미를 부여해주는 역할
}

const otani: 야구부 = {
  name: "otani",
  isPassed: true,
  position: "pitcher",
  weight: 95.3,
  height: 193,
  backNumber: 17,
  1: "A",
  2: "B",
};

// 다른 값들은 점 접근법/대괄호 접근법으로 value 를 변경할 수 있지만
// readonly가 붙어있는 backNumber 는 선언할 때 제외 변경 불가
otani["1"] = "A+";
otani.position = "투수";
// otani.backNumber=15 // 변경 불가
console.log(otani);

// 함수의 타입을 설정하는 인터페이스도 만들 수 있음
interface Add {
  (a: number, b: number): number;
}
const sum: Add = function (num1, num2) {
  return num1 + num2;
};

// 교차 타입
interface Toy {
  name: string;
  start(): void;
}
interface Car {
  name: string;
  color: string;
  price: number;
}

const toyCar: Toy & Car = {
  name: "tayo",
  start() {
    console.log(this.name);
  },
  color: "blue",
  price: 50000,
};
toyCar.start();

// type
// interface 처럼 오브젝트에 선언할 수 있음
type Person = {
  name: string;
  age?: number;
  like?: string[];
  gender: string; // gender 변경
};

let Daniel: Person = {
  name: "daniel",
  age: 20,
  gender: "Female",
};

type Gender = "Female" | "male";
const gender: Gender = "Female";
// const gender2:Gender="female"

type Person2 = {
  name: string;
  age?: number;
  like?: string[];
  gender: Gender; // gender 변경
};

let Albert: Person2 = {
  name: "Albert",
  age: 20,
  //   gender: "female",
  gender: "Female", //type 으로 선언해둔 문자열 아니라면 오류
};
console.log(Albert.gender);
