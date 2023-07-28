// 콜백함수 사용 예시
// 메인 함수, 함수 타입 파라미터 맨 마지막에 하나 더 선언
// function mainFunc(param1, param2, callback) {
//   //   const result = param1 + param2;
//   //   콜백함수에 결과 전달
//   callback(result);
// }

// function callbackFunc(param) {
//   console.log("콜백함수 입니다");
//   //   console.log(param);
// }

// mainFunc(1, 2, callbackFunc);

// // ###################################################
// // 이전 마트 예제 가져오기
// let product;
// let price;
// goMart();
// // pickDrink();
// // pay(product, price); 아래처럼 변경
// pickDrink(pay);
// // -> pay 함수를 매개변수로 선언해도 됨
// // pickDrink(function pay(product, price) {
// //   console.log(`상품명: ${product}, 가격: ${price}`);
// // });

// function goMart() {
//   console.log("마트에 왔다. 어떤걸 살지 고민한다");
// }

// function pickDrink(callback) {
//   setTimeout(function () {
//     console.log("고민 끝!");
//     product = "제로콜라";
//     price = 2000;
//     callback(product, price);
//   }, 3000);
// }
// function pay(product, price) {
//   console.log(`상품명: ${product}, 가격: ${price}`);
// }

// ###################################################
// 콜백 지옥
// : 콜백함수가 반복되어 코드의 들여쓰기가 너무 깊어짐
// => 가독성/유지보수성 하락

// 1초마다 배경색이 변경되는 코드
// 빨 -> 주 -> 노 -> 초 -> 파
setTimeout(function () {
  document.querySelector("body").style.backgroundColor = "red";
  setTimeout(function () {
    document.querySelector("body").style.backgroundColor = "orange";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "yellow";
      setTimeout(function () {
        document.querySelector("body").style.backgroundColor = "green";
        setTimeout(function () {
          document.querySelector("body").style.backgroundColor = "blue";
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
