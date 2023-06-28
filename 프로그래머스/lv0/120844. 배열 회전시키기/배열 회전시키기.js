function solution(numbers, direction) {
    var answer = numbers;
    if(direction === 'left') {
        let tmp = answer[0];
        answer.shift();
        answer.push(tmp)
    } else {
        let tmp = answer[numbers.length - 1];
        answer.pop();
        answer.unshift(tmp)
    }
    return answer;
}