function solution(num_list, n) {
    var answer = [];
    let count = parseInt(num_list.length / n);
    for(let i = 0; i < count; i++) {
        answer.push(num_list.splice(0, n))
    }
    return answer;
}