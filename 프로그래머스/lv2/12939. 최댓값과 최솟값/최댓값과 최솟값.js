function solution(s) {
    let newStr = s.split(' ')
    let arr = []
    newStr.map(item => arr.push(Number(item)))
    return Math.min(...arr).toString() + ' ' + Math.max(...arr).toString()
}