function solution(numbers, k) {
    var answer = ((k * 2) -1 ) % numbers.length;
    if(answer === 0) answer = numbers.length
    return answer;
}