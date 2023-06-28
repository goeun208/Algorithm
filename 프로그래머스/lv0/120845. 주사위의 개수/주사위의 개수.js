function solution(box, n) {
    if(n > box[0] || n > box[1] || n > box[2]) return 0;
    let answer = 0;
    answer = Math.floor(box[0] / n) * Math.floor(box[1] / n) * Math.floor(box[2] / n)
    return answer;
}