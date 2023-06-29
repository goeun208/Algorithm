function solution(my_string) {
    var answer = [];
    for(str of my_string) {
        answer.push(str.toLowerCase())
    }
    return answer.sort().join('');
}