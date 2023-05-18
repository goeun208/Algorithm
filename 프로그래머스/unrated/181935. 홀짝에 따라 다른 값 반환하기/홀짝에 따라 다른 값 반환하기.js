function solution(n) {
    if(n % 2 === 0) {
        let arr = [];
        for( let i = 2; i <= n; i++) {
            (i % 2 === 0) && arr.push(i * i)
        }
        return arr.reduce((a, b) => a+b)
    } else {
        let arr = [];
        for( let i = 1; i <= n; i++) {
            (i % 2 === 1) && arr.push(i)
        }
        return arr.reduce((a, b) => a+b)
    }
}