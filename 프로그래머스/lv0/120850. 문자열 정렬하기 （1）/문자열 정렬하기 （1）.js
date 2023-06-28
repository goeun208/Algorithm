function solution(my_string) {
    var answer = [];
    for(str of my_string) {
        !isNaN(str) && answer.push(Number(str))
    }
    return answer.sort();
}