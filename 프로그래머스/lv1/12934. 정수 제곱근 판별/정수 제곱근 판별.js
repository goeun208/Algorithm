function solution(n) {
    // parseInt(n / x) === x
    var answer = parseInt(n / Math.sqrt(n)) === Math.sqrt(n) ? (Math.sqrt(n) + 1) * (Math.sqrt(n) + 1) : -1 ;
    return answer;
}