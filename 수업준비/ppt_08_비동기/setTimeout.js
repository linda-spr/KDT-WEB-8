// console.log(1);
// setTimeout(function () {
//   console.log(2);
// }, 2000);
// console.log(3);

// 비동기 처리 이유
let product;
let price;
goMart();
pickDrink();
pay(product, price);

function goMart() {
  console.log("마트에 왔다. 어떤걸 살지 고민한다");
}

function pickDrink() {
  setTimeout(function () {
    console.log("고민 끝!");
    product = "제로콜라";
    price = 2000;
  }, 3000);
}
function pay(product, price) {
  console.log(`상품명: ${product}, 가격: ${price}`);
}
