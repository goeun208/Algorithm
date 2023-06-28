function solution(n) {
    var answer = n.toString().split('');
    let count = 0;
    answer.map((item) => count += Number(item))
    return count;
}