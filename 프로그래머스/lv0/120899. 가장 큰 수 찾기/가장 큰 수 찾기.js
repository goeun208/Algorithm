function solution(array) {
    var answer = [];
    let mx = Math.max(...array)
    answer.push(mx)
    answer.push(array.indexOf(mx))
    return answer;
}