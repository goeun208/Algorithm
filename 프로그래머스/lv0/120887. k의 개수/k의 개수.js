function solution(i, j, k) {
    var answer = 0;
    for(let start = i; start <= j; start++) {
        let compare = k.toString()
        let str = start.toString().split('')
        str.map(item => item === compare && answer++)
    }
    return answer;
}