function solution(number) {
    let answer = 0;
    let str = number.split('').map(v => Number(v))
    for(let i of str) {
        answer += i    
    }
    return answer % 9;
}