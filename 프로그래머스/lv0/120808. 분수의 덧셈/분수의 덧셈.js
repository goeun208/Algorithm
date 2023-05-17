const findGcd = (denom, numer) => {
    let gcd = 1;
    // 최대공약수 구하기
    for(let i=1; i<=Math.min(denom, numer); i++){
        if(denom % i === 0 && numer % i === 0){
            gcd = i;
        }
    }
    
    return gcd
}

function solution(numer1, denom1, numer2, denom2) {
    let answer = [];
    // 분모와 분자를 그들의 최대공약수로 나누면 기약분수
    let denom = denom1 === denom2 ? denom1 : denom1 * denom2;
    let numer = denom1 === denom2 ? numer1 + numer2 : numer1 * denom2 + numer2 * denom1;
    
    let gcd = findGcd(denom, numer)
    
    // 최대공약수가 1이면 기약분수
    // 최대공약수가 1이 아니면 분자, 분모를 gcd로 나눈다
    while(gcd !== 1) {
        numer = parseInt(numer / gcd)
        denom = parseInt(denom / gcd)
        gcd = findGcd(denom, numer)
        if(gcd === 1) break;
    }
    arr = [numer, denom]

    return arr;
}