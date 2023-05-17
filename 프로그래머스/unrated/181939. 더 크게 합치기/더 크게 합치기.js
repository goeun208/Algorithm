function solution(a, b) {
    let first = a + '' + b;
    let second = b + '' + a;
    
    return first >= second ?
        Number(first) : Number(second);
}