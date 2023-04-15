//Day 4-1 삼총사

function solution(numbers) {
  let answer = 0;

  for (let i = 0; i < numbers.length - 2; i++) {
    for (let j = i + 1; j < numbers.length - 1; j++) {
      for (let k = j + 1; k < numbers.length; k++) {
        if (numbers[i] + numbers[j] + numbers[k] === 0) {
          answer++;
        }
      }
    }
  }

  return answer;
}

//3중 for문으로 풀수있다.

//최소직사각형
function solution(sizes) {
  let maxWidth = 0;
  let maxHeight = 0;

  for (const size of sizes) {
    const [width, height] = size.sort((a, b) => a - b);

    maxWidth = Math.max(maxWidth, width);
    maxHeight = Math.max(maxHeight, height);
  }

  return maxWidth * maxHeight;
}
