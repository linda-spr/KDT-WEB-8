// promise 객체를 반환하는 promise1 함수 정의
function promise1(flag) {
  // flag: true, false
  return new Promise(function (resolve, reject) {
    if (flag) {
      resolve(
        `promise 상태는 fulfilled(성공)!! then으로 연결됩니다. 이 때의 flag는 ${flag} 입니다.`
      );
    } else {
      reject(
        `promise 상태는 rejected(실패)!! catch로 연결됩니다. 이 때의 flag는 ${flag} 입니다.`
      );
    }
  });
}

// console.log(promise1(true));
// Promise {
//     'promise 상태는 fulfilled(성공)!! then으로 연결됩니다. 이 때의 flag는 true 입니다.'
//   }

// 성공, then 연결
promise1(false)
  .then(function (result) {
    console.log(result);
  })
  .catch(function (err) {
    // 에러 처리
    console.log(err);
  });

// ###################################################
// 마트 코드 가져오기
let product;
let price;
goMart();
pickDrink().then(pay);
// 마찬가지로 then() 안에 매개변수로 pay 함수 선언해도 됨

function goMart() {
  console.log("마트에 왔다. 어떤걸 살지 고민한다");
}

function pickDrink() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("고민 끝!");
      product = "제로콜라";
      price = 2000;
      resolve();
    }, 3000);
  });
}
function pay(product, price) {
  console.log(`상품명: ${product}, 가격: ${price}`);
}

// ###################################################
// Promise 체이닝

// 체이닝 사용 안한 경우
/*
function add(n1, n2, callback) {
  setTimeout(function () {
    let result = n1 + n2;
    callback(result);
  }, 1000);
}

function mul(n, callback) {
  setTimeout(function () {
    let result = n * 2;
    callback(result);
  }, 700);
}

function sub(n, callback) {
  setTimeout(function () {
    let result = n - 1;
    callback(result);
  }, 500);
}

// (4 + 3) * 2 - 1
// add -> mul -> sub
add(4, 3, function (x) {
  console.log('1: ', x); // x = 4 + 3
  mul(x, function (y) {
    console.log('2: ', y); // y = x * 2
    sub(y, function (z) {
      console.log('3: ', z); // z = y - 1
    });
  });
});
*/

// 체이닝 사용한 경우
// 장점1. then 메서드 연속 사용 가능! -> 순차적인 작업 가능
//        콜백 지옥에서 탈출!
// 장점2. 예외 처리 간편
// => 마지막에 catch 구문에서 한 번에 에러 처리 가능

// add -> mul -> sub
function add(n1, n2) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n1 + n2;
      resolve(result);
    }, 1000);
  });
}

function mul(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n * 2;
      resolve(result);
    }, 700);
  });
}

function sub(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n - 1;
      // resolve(result);
      reject(new Error("의도적으로 에러를 일으켜봄!!"));
    }, 500);
  });
}

// promise 체이닝 사용해서
// add -> mul -> sub 순으로 실행
add(4, 3) //=> resolve(3 + 4) => resolve(7) => then(7)
  .then(function (result) {
    // result = 7
    console.log("1: ", result); // 7
    return mul(result); // mul(7) => resolve(14) => then(14)
  })
  .then(function (result) {
    // result = 14
    console.log("2: ", result); // 14
    return sub(result); // sub(14) => resolve(13) => then(13)
  })
  .then(function (result) {
    // result = 13
    console.log("3: ", result); // 13
  })
  .catch(function (error) {
    console.log("실패!");
    console.log(error);
  });
