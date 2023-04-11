//Day 2-1 약수의 개수와 덧셈

function solution(left, right) {
  let result = 0;

  for (let i = left; i <= right; i++) {
    const isSquare = Math.sqrt(i) % 1 === 0;
    result += isSquare ? -i : i;
  }

  return result;
}

//각 숫자 i에 대해 제곱근을 구한 후, 그 결과가 정수인지 확인하여 제곱수 여부를 판별합니다.
//제곱수인 경우, 해당 수의 약수 개수는 홀수
//Math.sqrt() 함수는 주어진 숫자의 제곱근을 반환
//Math.sqrt(9)는 3을 반환하고, Math.sqrt(2)는 약 1.414를 반환 그래서

//Day 2-2 3진법 뒤집기

function solution(n) {
  const reverse3 = n.toString(3).split("").reverse().join("");
  const reverse10 = parseInt(reverse3, 3);

  return reverse10;
}

// n.toString(3) 주어진 자연수 n을 3진법 으로 바꾼다.
//parseInt 10진법으로 변환

//Day 2-3 하샤드 수 구하기
function solution(x) {
  const sumOfDigits = x
    .toString()
    .split("")
    .reduce((acc, curr) => acc + parseInt(curr), 0);
  return x % sumOfDigits === 0;
}

//sumOfDigits 자리수의 합
//.split("") -> 18 이면 ["1","8"]로 변형
//이게 18이라는 수가 주어지면 1+8 = 9 그리고 18/9 하면 나머지가 0 그러면 하샤드 수가 된다.

//Day 2-4 콜리츠 수 구하기

function solution(num) {
  let answer = 0;
  for (let i = 0; i < 500; i++) {
    if (num !== 1) {
      num = num % 2 == 0 ? num / 2 : num * 3 + 1;
    } else {
      return (answer = i);
    }
  }
  return (answer = -1);
}

// 주어진 수가 1이 될 때까지 다음 작업을 반복

//Day 2-5 핸드폰 번호 가리기 구하기
function solution(phone_number) {
  const hiddenLength = phone_number.length - 4;
  const hiddenPart = "*".repeat(hiddenLength);
  const lastFourDigits = phone_number.slice(-4);
  return hiddenPart + lastFourDigits;
}

//전화번호의 길이에서 4를 뺀 값을 hiddenLength 변수에 저장
//repeat() 메소드를 사용  hiddenLength만큼의 '*' 문자를 생성하여 hiddenPart 변수에 저장

//Day 2-6 내적 구하기
function solution(a, b) {
  let answer = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (i == j) {
        answer.push(a[i], b[j]);
      }
    }
  }
  return answer.reduce((acc, curr) => acc + curr, 0);
}

//이중포문 다시 확인해보기
