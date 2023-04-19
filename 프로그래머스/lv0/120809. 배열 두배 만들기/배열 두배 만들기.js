function solution(numbers) {
    var answer = [];
    numbers.map((item, index) => answer[index] = item * 2)
    return answer;
}