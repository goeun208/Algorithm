function factorial(num) {
    let sum = BigInt(1);
    for(let i = num; i >= 1; i--) { // 자기 자신 제외하기 위해 num - 1
        sum *= BigInt(i);
    }
    return sum;
}

function solution(balls, share) {
    return factorial(balls) / (factorial(balls - share) * factorial(share));
}