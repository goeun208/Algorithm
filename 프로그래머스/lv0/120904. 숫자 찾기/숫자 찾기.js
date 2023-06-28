function solution(num, k) {
    let arr = num.toString().split('')
    var answer = arr.indexOf(k.toString())
    return answer === -1 ? -1 : answer + 1;
}