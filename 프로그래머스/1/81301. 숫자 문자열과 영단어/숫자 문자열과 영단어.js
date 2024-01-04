function solution(s) {
    let numbers = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
      ];
      var answer = s;
      for (let i = 0; i < numbers.length; i++) {
        // split(): 특정 구분자를 기준으로 문자열을 분리하여 결과를 배열로 반환
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
      }
      return Number(answer);

}