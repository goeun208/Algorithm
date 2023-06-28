function solution(n) {
    var answer = [];
    for(let i = 0; i <= n/2; i++) {
        if(n % i === 0) answer.push(i)
    }
    answer.push(n)
    return answer.sort((a,b) => a-b);
}