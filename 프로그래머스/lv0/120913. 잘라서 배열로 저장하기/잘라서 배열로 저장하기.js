function solution(my_str, n) {
    var answer = [];
    let count = 0;
    while(count < my_str.length) {
        answer.push(my_str.slice(count, count + n))
        count = count + n
    }
    return answer;
}