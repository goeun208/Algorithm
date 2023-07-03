//가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다. 
function solution(sides) {
    let answer = 0;
    let max = Math.max(...sides)
    let min = Math.min(...sides)
    let total = sides[0] + sides[1] // 두 변의 길이의 합
    let arr1 = []
    let arr2 = []
    for(let i = max - min + 1; i <= max; i++) {
        arr1.push(i);
    }
    for(let i = max + 1; i < total; i++) {
        arr2.push(i);
    }
    return arr1.length + arr2.length;
}