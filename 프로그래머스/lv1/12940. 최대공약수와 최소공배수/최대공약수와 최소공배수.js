function solution(n, m) {
    var answer = [];
    let gcd = [];
    let tmp = n;
    if(n > m) { // m을 큰 수로 고정해두기
        n = m; 
        m = tmp;
    }
    //최대공약수
    for(let i = 1; i <= n; i++) {
        if(n % i === 0 && m % i === 0) gcd.push(i)
    }
    answer.push(Math.max(...gcd))
    
    // 최소공배수 구하기
    for(let i = 1; i <= n * m; i++) {
        if(i % n === 0 && i % m === 0) {
            answer.push(i);
            break;
        }
    }
    return answer;
}