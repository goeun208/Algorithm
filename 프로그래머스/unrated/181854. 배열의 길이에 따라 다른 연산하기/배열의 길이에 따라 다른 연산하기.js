function solution(arr, n) {
    var answer = [];
    arr.length % 2 === 0 // 길이가 짝수면
    ? arr.map((item, i) =>  i % 2 === 0 ? answer.push(item) : answer.push(item + n))  
    : arr.map((item, i) =>  i % 2 !== 0 ? answer.push(item) : answer.push(item + n))
    return answer
}