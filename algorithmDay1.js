//Day 1

//Day 1-1 평균 구하기
function solution(arr) {
  arr.reduce((arr, curr) => arr + curr, 0) / arr.length;
}

// 단일 결과 값으로 줄입니다. 이 경우, 리듀서 함수는 (acc, curr) => acc + Number(curr)입니다.
// 여기서 acc는 누산기로서, 이전 배열 요소까지의 누적 계산 결과가 저장되고, curr는 현재 배열 요소입니다.

//Day 1-2 짝수 홀수 구하기

function solution(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

//Day 1-3 약수의 합
function solution(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  return sum;
}

//for 문 돌리는거 까먹지 말자!!

//Day 1-4 자릿수 더하기
const solution = (N) =>
  N.toString()
    .split("")
    .reduce((acc, curr) => acc + Number(curr), 0);

//N.toString(): 자연수 N을 문자열로 변환

//.split(""): 변환된 문자열을 각 문자로 구성된 배열로 나눕니다.
//예를 들어, "123"이라는 문자열이 ["1", "2", "3"]이라는 배열로 변환됩니다.

//.reduce((acc, curr): reduce 함수는 배열의 모든 요소에 대해 지정된 리듀서 함수를 적용하여
// 단일 결과 값으로 줄입니다. 이 경우, 리듀서 함수는 (acc, curr) => acc + Number(curr)입니다.
// 여기서 acc는 누산기로서, 이전 배열 요소까지의 누적 계산 결과가 저장되고, curr는 현재 배열 요소입니다.

//Day 1-5 x만큼 간격이 있는 n개의 숫자
function solution(x, n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }
  return answer;
}

// 배열이 필요하면 [] 선언해줘야한다. 그리고 push로 배열에 넣어줘야한다.

//Day 1-6 문자열 내 p와 y의 개수

function solution(s) {
  let answer = true;
  s = s.toUpperCase(); //대문자변환
  let num = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "P") num++;
    if (s[i] === "Y") num--;
  }
  answer = num === 0;

  return answer;
}

//num이 0이면 'P'의 개수와 'Y'의 개수가 같다는 것을 의미하므로, 이 경우 answer는 true가 됩니다.
