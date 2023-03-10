// # 문제57 : 1의 개수
// **0부터 1000까지 1의 개수를 세는 프로그램**을 만들려고 합니다.
// 예를 들어 0부터 20까지 1의 개수를 세어본다면 1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19에 각각 1이 들어가므로 12개의 1이 있게 됩니다.
// 11은 1이 2번 들어간 셈이죠.
// 그렇다면 0부터 1000까지의 수에서 1은 몇 번이나 들어갔을까요? 출력해 주세요.

//1번 비효율적인 방법
const obj = {};

for (let i = 0; i <= 1000; i++) {
  let tmp = i;
  while (tmp > 0) {
    let num = tmp % 10;
    if (obj[num]) {
      obj[num]++;
    } else {
      obj[num] = 1;
    }
    tmp = parseInt(tmp / 10, 10);
  }
}

console.log(obj[1]);

// 2번 for of 를 이용한 방법
let s = "";
for (let i = 0; i <= 1000; i++) {
  s += i;
}
let count = 0;
for (let j of s) {
  if (j == 1) {
    count++;
  }
}
console.log(count);

// 3번 for in 을 이용한 방법
let st = "";
for (let i = 0; i <= 1000; i++) {
  st += i;
}
let ct = 0;
for (let j in st) {
  if (st[j] == 1) {
    ct++;
  }
}
console.log(ct);

// 4번 정규표현식을 이용한 방법
let str = "";
for (let i = 0; i <= 1000; i++) {
  str += i;
}
console.log(str.match(/1/g).length);
