function solution(n) {
    if(n === 0) return 0;
    if(n === 1) return 1;
    
    let pp = 0;
    let p = 1;
    let answer = 0;
    
    for(let i = 2; i <=n; i++) {
        answer = p + pp;
        pp = p;
        p = answer % 1234567;
    }
    return answer % 1234567;
}