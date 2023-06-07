function solution(x) {
    let hashard = x.toString().split('')
    let mod = 0
    for(let i = 0; i < hashard.length; i++) {
        mod += Number(hashard[i])
    }
    return x % mod === 0 ? true : false;
}