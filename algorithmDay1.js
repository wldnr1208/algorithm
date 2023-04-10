//Day 1
//Day 1-1 평균 구하기
function solution(arr) {
  arr.reduce((arr, curr) => arr + curr, 0) / arr.length;
}

//arr+curr,0 -> 0이 들어간 이유는 계산기와 누산기 초기화 시키려고

//Day 1-2 짝수 홀수 구하기

function solution(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

//Day 1-3 약수의 합
