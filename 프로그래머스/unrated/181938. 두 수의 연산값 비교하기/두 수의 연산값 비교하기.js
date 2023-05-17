function solution(a, b) {
    let joinStr = `${a}${b}`;
    
    return Math.max(Number(joinStr), 2 * a * b);
}