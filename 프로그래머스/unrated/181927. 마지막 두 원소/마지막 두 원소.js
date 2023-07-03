function solution(num_list) {
    var answer = JSON.parse(JSON.stringify(num_list));
   answer[answer.length - 1] > answer[answer.length - 2] 
    ? answer.push(answer[answer.length - 1] - answer[answer.length - 2])
    : answer.push(answer[answer.length - 1] * 2)
    return answer;
}