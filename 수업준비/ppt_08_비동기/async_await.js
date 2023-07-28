// async / await
// 비동기 처리 문법 중 가장 최신 문법(ES2017)

// 구조
// - 함수 앞에 async 키워드 붙이기
// - 비동기 처리 메서드 앞에 await 키워드 붙이기 (해당 작업을 기다려 줄 것)
// async랑 await 세트!! 같이 쓰자!!

// 마트 코드 변경
function goMart() {
  console.log("마트에 가서 어떤 음료 살지 고민!");
}

function pickDrink() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("고민 끝~!");
      product = "제로 콜라";
      price = 4000;
      resolve();
    }, 3000);
  });
}

function pay() {
  console.log(`상품명: ${product}, 가격: ${price}`);
}

async function exec() {
  goMart(); // 1번 실행
  await pickDrink(); // 2번 실행 -> 기다려줘야 함!
  pay(); // 2번이 완료되어야 3번 실행

  // 장점) 코드 실행 순서가 명확히 보인다!
}

let product;
let price;
exec();
