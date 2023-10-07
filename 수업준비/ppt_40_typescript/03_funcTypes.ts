// 자바스크립트에서는
// function jsPrint(a, b) {
// 	console.log(a);
// 	console.log(b);
//   }
//   jsPrint(1, 2, 3);
//   jsPrint(1, 2);
//   jsPrint(1);
// 선언된 매개변수의 개수와
// 함수 호출시 전달되는 파라미터의 개수가 달라도 가능
//

function print(a: number, b: number, c?: number): void {
  console.log(a);
  console.log(b);
  console.log(c);
}
print(1, 2, 3);
print(1, 2);

function print2(a: number, b: number, c = 5): void {
  console.log("-----print2 호출-----");
  console.log(a);
  console.log(b);
  console.log(c);
}
print2(1, 2);
print2(1, 2, 3);

function sayHello(): void {
  console.log("hello");
}

// void 말고 다른 리턴 타입
function concatStr(a: string, b: string): string {
  return a + b;
}

function circleArea(a: number): number {
  return a * a * Math.PI;
}

// 함수 표현식으로
const squareArea = (a: number, b: number): number => {
  return a * b;
};

// 함수 표현식으로, 리턴키워드 없는 리턴
const triangleArea = (w: string, h: string): number =>
  (Number(w) * Number(h)) / 2;

//  함수 호출하기
console.log("원의 넓이 " + circleArea(5));
console.log("사각형 넓이", squareArea(3, 4));
console.log(`삼각형 넓이 ${triangleArea("3", "4")}`);
// 리턴의 타입 = 함수의 타입
// 문자열과 문자열을 이어주는 함수 concatStr 의 리턴타입은 string이다.

// interface 선언 시 함수의 타입에
// void 뿐만 아니라 다른 타입이 올 수도 있겠지요?
// string 뿐만 아니라..
interface Greet {
  name: string;
  hi(): string;
  bye(a: number): string;
}

const jh: Greet = {
  name: "allie",
  hi() {
    return "hi my name is " + this.name;
  },
  bye(a: number) {
    return `작별 인사를 ${a}번 했습니다.`;
  },
};

jh.hi();
jh.bye(5);
//   function sayBye(): void {
// 	return "Bye"; // 값을 반환하여 에러가 난다.
//   }

// never
// 특정 조건에서만 빠져나갈 수 있고, 어떤 조건에서는
// 무한루프를 돌지만
// 항상 함수의 끝에 절대 도달하지 않는 경우에만 never 할당 가능
// 아래의 코드는 err
// function goingOn(a: number): never {
// 	while (true) {
// 		console.log("go");
// 		if (a > 10) break;
// 	}
// }
function goingOn(): never {
  while (true) {
    console.log("go");
  }
}

// -------------------------------------
// 함수 오버로딩
// 숫자가 오면 더하고 문자가 오면 이어주는 함수 만들기
/* function addSomething(x: string | number, y: string | number): string | number {
  return x + y; //문자 + 숫자 인 경우가 올 수 있기 때문에 error
} */

// 방법 1 오버로딩
/* 
(참고) 오버로딩 그리고 오버라이딩
- 오버라이딩 : 클래스의 상속에서의 개념
    하위 클래스가 상위클래스에서 메소드를 상속받을 때, 
    같은 이름의 함수를 재정의 하는 방법
    class Car {
        constructor(year) {
             this.year = year;
        }
        getYear(){
            return this.year;
        }
    }
    class Truck extends Car{
        // 상속 받은 클래스의 getYear 메소드 재정의(overriding)
        getYear(){
           return this.year+2000;
        }
    }
    - 오버 로딩 : 
    함수에서 매개변수의 개수, 타입/ 반환 타입이 다를 때
    같은 이름으로 매개변수의 종류와 개수를 달리 선언할 수 있음
    비슷한 기능일 때만 사용 가능
*/
function add(x: string, y: string): string;
function add(x: number, y: number): number;
// 오버로딩 함수 실행은 any로
function add(x: any, y: any) {
  return x + y;
}

add(1, 2); // 3
add("hello", "world"); // 'helloworld'
console.log(add("1", "2"));

// 오버로딩을 통해 다음 함수 호출은 일어날 수가 없다.
// console.log(add(1, '2')); error!
