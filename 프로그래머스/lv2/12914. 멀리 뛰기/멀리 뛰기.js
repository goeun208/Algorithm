function solution(n) {
    if(n === 1) return 1;
    if(n === 2) return 2; 
    
    let pp = 1;
    let p = 2;
    let answer = 0;
    
    for(let i = 3; i <=n; i++) {
        answer = p + pp;
        pp = p;
        p = answer % 1234567;
    }
    return answer % 1234567;
}