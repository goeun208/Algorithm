// 장군개미 5, 병정개미 3, 일개미 1
function solution(hp) {
    let n = hp
    let count = 0
    let array = [5, 3, 1]
    for (gaemi of array){
        count += parseInt(n / gaemi)
        n %= gaemi
    }
    return count
}

