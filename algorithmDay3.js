//Day 3-1 같은 숫자 삭제 스택/큐, 스택구조로 풀기
function solution(arr) {
  const stack = [];
  for (const num of arr) {
    if (stack.length === 0 || stack[stack.length - 1] !== num) {
      // 스택이 비어있거나, 스택의 top에 있는 원소와 현재 원소가 다르면 스택에 현재 원소를 추가
      stack.push(num);
    }
  }
  return stack;
}
//for...of 반복문은 ES6부터 추가된 새로운 반복문 중 하나이며, iterable(순회 가능한) 객체를 대상으로 동작
//아래는 for...of 반복문의 예시
//const arr = [1, 2, 3, 4, 5];
/* for (const num of arr) {
    console.log(num);
  } */
//stack[stack.length - n]은 스택에서 마지막(top)에서 n번째에 있는 원소 즉,
//stack[stack.length - 1] -> 스택(Stack)의 가장 마지막(top)에 있는 원소
//stack = [1, 2]: 스택의 top에 있는 원소는 stack[stack.length - 1] = 2입니다.
//따라서 arr[5] = 3과 다르므로, arr[5]을 스택에 추가합니다.

//Day 3-2 예산구하기
function solution(d, budget) {
  // 부서별 신청 금액을 오름차순으로 정렬
  d.sort((a, b) => a - b);

  // reduce 함수를 사용하여 예산 내에서 물품을 지원할 수 있는 부서 개수를 계산
  return d.reduce((acc, cur) => {
    if (budget >= cur) {
      budget -= cur;
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);
}

//if (budget >= cur) {...} else {...}: 배열 d의 각 원소(부서별 신청 금액)를 처리할 때
//예산(budget)이 현재 신청 금액(cur)보다 크거나 같으면 예산에서 현재 신청 금액을 빼고,
//누적 값(acc)에 물품을 지원할 수 있는 부서의 개수를 1 증가시킨다.
//이는 현재 부서에 물품을 지원할 수 있다는 의미입니다.
//예산이 현재 신청 금액보다 작다면 더 이상 물품을 지원할 수 없으므로 누적 값에 변화를 주지 않고 그대로 반환합니다.
