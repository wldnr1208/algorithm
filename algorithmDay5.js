//시저 암호
function solution(s, n) {
  return s
    .split("")
    .map((char) => {
      const charCode = char.charCodeAt(0);
      if (char === " ") return char;
      const base = charCode >= 97 ? 97 : 65;
      return String.fromCharCode(((charCode - base + n) % 26) + base);
    })
    .join("");
}

//나머지가 1이 되는 수 찾기
function solution(n) {
  for (let x = 2; x < n; x++) {
    if (n % x === 1) {
      return x;
    }
  }
}

//정수 내림차순으로 배치하기
function solution(n) {
  let answer = (n + "").split("");
  return Number(answer.sort((a, b) => b - a).join(""));
}

//서울에서 김서방 찾기
function solution(seoul) {
  let answer = "";
  let kim = seoul.indexOf("Kim");
  answer = `김서방은 ${kim}에 있다`;
  return answer;
}

//행렬의 덧셈
function solution(arr1, arr2) {
  let answer = [[]];
  for (let i = 0; i < arr1.length; i++) {
    answer[i] = [];
    for (let j = 0; j < arr1[i].length; j++) {
      answer[i].push(arr1[i][j] + arr2[i][j]);
    }
  }
  return answer;
}

//부족한 금액 계산하기
function solution(price, money, count) {
  var answer = 0;
  for (let i = 0; i <= count; i++) {
    answer += price * i;
  }
  if (answer - money < 0) {
    //4번째 테스트에서 오류가 떴었다. 금액이 부족하지 않으면 0을 리턴해라
    // 그부분을 지나쳤다.
    return (answer = 0);
  } else {
    return answer - money;
  }
}
