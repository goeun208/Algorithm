function solution(arr, divisor) {
    let divArr = []
    let answer =  arr.filter((item) => item % divisor === 0 && divArr.push(item)).sort((a, b) => a - b)
    if(answer.length <= 0) answer.push(-1)
    
    return answer;
}