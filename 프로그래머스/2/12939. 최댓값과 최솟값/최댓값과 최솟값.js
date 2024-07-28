function solution(s) {
    let newStr = s.split(' ').map(item => parseInt(item))
    return Math.min(...newStr).toString() + ' ' + Math.max(...newStr).toString()
}